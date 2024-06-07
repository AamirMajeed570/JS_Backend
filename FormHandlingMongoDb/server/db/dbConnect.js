import mongoose from "mongoose";

async function dbConnect(){
    await mongoose.connect("mongodb://localhost:27017/formhandling").then((data)=>{
        console.log("DB Connected Succesfully")
    }).catch((err)=>{
        console.log("Some Error Ocurred In Connecting DB",err.message);
    })
}
export default dbConnect;