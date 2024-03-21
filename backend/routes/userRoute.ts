import express from 'express';
import { registerUser, authUser, getUserProfile, getDoctors, getOneDoctor, logoutUser } from '../controllers/userController';
import {protect} from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile/:id').get(protect,getUserProfile);
router.route('/doctors').get(protect,getDoctors);
router.route('/doctors/:id').get(protect,getOneDoctor);
router.route('logout').get(protect,logoutUser);

export default router;
