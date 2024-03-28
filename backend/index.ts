import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http"; // Import http module for creating server
import { Server, Socket } from "socket.io";

import Route from "./routes/index";
import connectDB from "./config/Db";
import cookieParser from 'cookie-parser';
import { verifySocket } from './middlewares/authMiddleware';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000; // Set default port if PORT is not provided in .env file

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api", Route);

const server = http.createServer(app); // Create HTTP server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

interface User {
  userId: string;
  socketId: string;
}

interface ServerToClientEvents {
  getUsers: (users: string[]) => void;
  getMessage: (data: { senderId: string; message: string }) => void;
}

interface ClientToServerEvents {
  addUser: (userId: string) => void;
  sendMessage: (data: { senderId: string; receiverId: string; message: string }) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {}

const onlineUsers = new Map<string, string>();

const getKey = (map: Map<string, string>, val: string): string | undefined => {
  for (const [key, value] of map.entries()) {
    if (value === val) return key;
  }
};

io.use(verifySocket);

io.on('connection', (socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => {
  socket.on('addUser', (userId: string) => {
    onlineUsers.set(userId, socket.id);
    io.emit('getUsers', Array.from(onlineUsers.keys()));
  });

  socket.on('sendMessage', ({ senderId, receiverId, message }: { senderId: string; receiverId: string; message: string }) => {
    const receiverSocketId: string | undefined = onlineUsers.get(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('getMessage', { senderId, message });
    }
  });

  socket.on('disconnect', () => {
    const userId: string | undefined = getKey(onlineUsers, socket.id);
    if (userId) {
      onlineUsers.delete(userId);
    }
    io.emit('getUsers', Array.from(onlineUsers.keys()));
  });
});
