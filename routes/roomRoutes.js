import express from 'express';
import { protect } from "../middleware/authMiddleware.js";
import { createChatRoom, getChatRoom, getChatRooms } from '../controllers/room.js';

const Router = express.Router();

Router.route('/').get(protect, getChatRooms).post(protect, createChatRoom);
Router.route('/:id').get(protect, getChatRoom);

export default Router;
