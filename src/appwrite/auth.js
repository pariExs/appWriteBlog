import {conf} from '../conf/conf'

import { Client,ID,Account } from 'appwrite'

class AuthService{

    client =new Client()
    account;
    constructor(){
        this.client.setEndpoint(conf.appWriteProjectUri)
                   .setProject(conf.appWriteProjectId)
        this.account=new Account(this.client)

    }

    async createAccount({email,passoword,name}){
    try {
            let user=await this.account.create(ID.unique(),email,passoword,name)
            if(user){
                //login functionality
                this.loginAccount({email,password})
            }else{
                return user
            }
    } catch (error) {
        console.log("appwrite::register",error)
    }
    }

    async loginAccount({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)

        } catch (error) {
            console.log("appwrite :: login",error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("appwrite :: get current user",error)
        }
    }
    async logoutAccount(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("error :: logout ",error)
        }
    }

}

let authService=new AuthService()

export {authService}