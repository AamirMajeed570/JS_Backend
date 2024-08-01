import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();
export const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log('Something went wrong while connecting DB ',error?.message)
    }
}