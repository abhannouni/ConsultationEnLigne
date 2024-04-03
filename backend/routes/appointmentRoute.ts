import express from 'express';
import { getAppointments } from '../controllers/appointmentController';
import {protect} from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/get').get(protect,getAppointments);

export default router;