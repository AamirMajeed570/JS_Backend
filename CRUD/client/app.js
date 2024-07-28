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

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.get("/api", (req, res) => {
  res.send("Hello from API page");
});

app.get("/api/products", (req, res) => {
  res.send("Hello from Products");
});

app.listen(
  PORT,
  console.log(`Server is Listening at http://localhost:${PORT}`)
);
