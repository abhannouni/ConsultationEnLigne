import express from 'express';
import { protect } from "../middleware/authMiddleware.js";
import { getMessages, createMessage } from '../controllers/message.js';

const Router = express.Router();

Router.route('/').get(protect, getMessages).post(protect, createMessage);

export default Router;