import express from "express";
import dbConnect from "./db/dbConnect.js";
import cors from 'cors'
import { userRoutes } from "./route/user.route.js";
const app = express();
const PORT = 3000;
dbConnect();

// Middlewares
app.use(cors())
app.use(express.json());
app.use('/api',userRoutes)

app.get('/',(req,res)=>{
    res.send("hello World")
});

app.listen(PORT,console.log(`Server is listening at http://localhost:${PORT}`))