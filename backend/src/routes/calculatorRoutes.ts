import { Router } from 'express';
import * as calculatorController from '../api/internal/calculator/controller';
import { validationMiddleware } from '../middleware/validationMiddleware';

const router = Router();

// Calculator operations
router.post('/add', validationMiddleware, calculatorController.addHandler);
router.post('/subtract', validationMiddleware, calculatorController.subtractHandler);
router.post('/clear', calculatorController.clearHandler);
router.get('/history', calculatorController.getHistoryHandler);

export default router;
