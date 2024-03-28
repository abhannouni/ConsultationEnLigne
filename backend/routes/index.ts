import { Router } from "express";
import userRoutes from './userRoute';
import chatRoomRoutes from './chatRoomRoute';
import chatMessageRoutes from './chatMessageRoute';

const router = Router();

router.use('/users', userRoutes);
router.use('/room', chatRoomRoutes);
router.use('/message', chatMessageRoutes);

export default router;