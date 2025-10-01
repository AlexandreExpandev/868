import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Public routes (no authentication required)
router.use('/external', externalRoutes);

// Protected routes (authentication required)
router.use('/internal', authMiddleware, internalRoutes);

export default router;
