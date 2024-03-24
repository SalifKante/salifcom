import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// Use cors middleware

// const port = 5000;
const port = process.env.PORT || 5000;

const app = express();
// Use cors middleware
app.use(cors());
app.get("/", (req, res) => {
  res.end("API is running...");
});

//Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

//Get a product by it is id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
