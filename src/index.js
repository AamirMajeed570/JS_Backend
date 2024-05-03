import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config()
// ConnectDB is returning a Promise
connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is Listening at http://localhost:${process.env.PORT}`);
    } )
})
.catch((error)=>{
    console.log("Failed To Connect DB!!",error)
})