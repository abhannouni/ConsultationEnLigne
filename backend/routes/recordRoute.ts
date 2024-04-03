import { getRecordsForUser, getOneRecord, createRecord, updateRecord, deleteRecord } from '../controllers/recordController';
import { protect } from '../middlewares/authMiddleware';
import express from 'express';

const router = express.Router();

router.route('/').get(protect, getRecordsForUser as any).post(protect, createRecord);
router.route('/:id').get(protect, getOneRecord).put(protect, updateRecord).delete(protect, deleteRecord as any);

export default router;