import mongoose from "mongoose";

export const connectDB=async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS={
            dbname:"crud"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("Connection successful!")
    }catch(err){
        console.error(err);
        process.exit(1)
    }
}