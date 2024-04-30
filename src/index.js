import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config()
// ConnectDB is returning a Promise
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is Listening at http://localhost:3000`);
    } )
})
.catch((error)=>{
    console.log("Failed To Connect DB!!",error)
})