import { Router } from "express";
import userRoutes from './userRoutes.js';
import messageRoutes from './messageRoutes.js';
import roomRoutes from './roomRoutes.js';

const router = Router();
router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/rooms', roomRoutes);

export default router;