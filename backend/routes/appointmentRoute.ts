import express from 'express';
import { getAppointments, createAppointment } from '../controllers/appointmentController';
import {protect} from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/get').get(protect,getAppointments);
router.route('/').post(protect,createAppointment as any);

export default router;