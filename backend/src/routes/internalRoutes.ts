import { Router } from 'express';
import calculatorRoutes from './calculatorRoutes';

const router = Router();

// Feature-specific routes
router.use('/calculator', calculatorRoutes);

export default router;
