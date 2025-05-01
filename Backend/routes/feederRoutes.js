import express from 'express';
import { getAllFeeders, updateFeeder } from '../controllers/feederController.js';
const router = express.Router();

router.get('/', getAllFeeders);
router.put('/:id', updateFeeder);

export default router;
