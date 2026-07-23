import { Client,ID,Databases,Storage,Query } from "appwrite";
import { conf } from "../conf/conf";
class Service {
    client =new Client
    databases
    storage
    constructor(){
        this.client.setEndpoint(conf.appWriteProjectUri)
        .setProject(conf.appWriteProjectId)
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
    }
    async createPOST({title,slug,content,featuredImage,status,userId}){
        try {
            return this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("appwrite :: create post::",error)
            return false
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite::updatePost::error::",error)
            return false
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite:: deletePost:: error::",error)
        }
    }
    async getPost({slug}){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite :: getPost :: error",error)
            return false
        }
    }
    async getPosts(){
        try {       
            return this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                Query.equal("status","active")

            )
        } catch (error) {
            console.log("appwrite::getPosts::error::",error)
        }
    }

    async uploadFile(file){ 
        try {
            await this.storage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
            return true
        } catch (error) {
            console.log("appwrite::uploadFile::error",error)
            return false
        }
    }
    async deletefFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite::deleteFile::error::",error)
        }
    }
    
        getFilePreview(fileId){
            return this.storage.getFilePreview(
                conf.appWriteBucketId,
                fileId
            )
        }
}
let service=new Service()
export {service}