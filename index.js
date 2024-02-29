import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import socketIO from "socket.io";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

