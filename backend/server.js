dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// const port = 3100;
const port = process.env.PORT || 3100;

//connexion to mongoose - MongoDB
connectDB();

// Use cors middleware

const app = express();

// Use cors middleware
app.use(cors());

app.get("/", (req, res) => {
  res.end("API is running...");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`The server is running on port ${port}`));
