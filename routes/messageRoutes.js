import express from 'express';
import { protect, doctor, patient} from "../middleware/authMiddleware.js";
import { getMessages, createMessage } from '../controllers/message.js';

const Router = express.Router();

Router.route('/').get(protect, doctor, patient, getMessages).post(protect, doctor, patient, createMessage);

export default Router;