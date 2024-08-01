import express from "express";
import dotenv from "dotenv";
import { productRouter } from "./routes/product.route.js";
import { dbConnect } from "./db/dbConnect.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
dbConnect()
  .then(() => console.log("DB Connected Succefully"))
  .catch(e => console.log("Something went wrong ", e?.message));
// Use the Middlewares
app.use(express.json());
app.use("/api", productRouter);

app.listen(
  PORT,
  console.log(`Server is Listening at http://localhost:${PORT}`)
);
