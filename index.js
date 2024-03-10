import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import path from "path";
import Route from "./routes/index.js";
import ConnectDB from "./config/Db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { Server } from "socket.io";

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

const io = new Server(http, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    global.chatSocket = socket;
    console.log("Socket connected");
    socket.on("chat", (data) => {
        console.log(data);
        io.emit("chat", data);
    });
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data);
    });
    socket.on("stopTyping", (data) => {
        socket.broadcast.emit("stopTyping", data);
    });
    
    socket.on("disconnect", () => {
        console.log("Socket disconnected");
    });

});

