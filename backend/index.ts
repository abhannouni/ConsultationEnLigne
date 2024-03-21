import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Route from "./routes/index";
import connectDB from "./config/Db";
import cookieParser from 'cookie-parser';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());

app.use(cors());

app.use(express.json());

app.use("/api", Route);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});