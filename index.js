import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import path from "path";
import Route from "./routes/index.js";
import ConnectDB from "./config/Db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
ConnectDB();

const port = process.env.PORT || 5000;
const app = express();

// CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", Route);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

