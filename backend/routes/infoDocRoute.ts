import express from 'express';
import { getInfoDoc, getOneInfoDoc, createInfoDoc, updateInfoDoc, deleteInfoDoc } from '../controllers/infoDocController';
import {protect} from '../middlewares/authMiddleware';


const router = express.Router();

router.route('/').get(protect,getInfoDoc).post(protect,createInfoDoc as any);
router.route('/get').get(protect,getOneInfoDoc as any);
router.route('/update').put(protect,updateInfoDoc as any);
router.route('/delete').delete(protect,deleteInfoDoc as any);
router.route('/').delete(protect,deleteInfoDoc as any);

export default router;


