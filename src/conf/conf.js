const conf={
    appWriteProjectId:String(import.meta.env.VITE_PROJECT_ID),
    appWriteProjectUri:String(import.meta.env.VITE_PROJECT_URI),
    appWriteDatabaseId:String(import.meta.env.VITE_DATABASE_ID),
    appWriteCollectionId:String(import.meta.env.VITE_COLLECTION_ID),
    appWriteBucketId:String(import.meta.env.VITE_BUCKET_ID),
}
export {conf}