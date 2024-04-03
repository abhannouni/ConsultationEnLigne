import { Router } from "express";
import userRoutes from './userRoute';
import chatRoomRoutes from './chatRoomRoute';
import chatMessageRoutes from './chatMessageRoute';
import infoDocRoute from "./infoDocRoute";
import recordRoute from "./recordRoute";
import appointmentRoute from "./appointmentRoute";

const router = Router();

router.use('/users', userRoutes);
router.use('/room', chatRoomRoutes);
router.use('/message', chatMessageRoutes);
router.use('/infoDoc', infoDocRoute);
router.use('/record', recordRoute);
router.use('/appointment', appointmentRoute);

export default router;