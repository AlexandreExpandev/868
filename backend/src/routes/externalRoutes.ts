import { Router } from 'express';
import * as securityController from '../api/external/security/auth/controller';

const router = Router();

// Authentication routes
router.post('/auth/login', securityController.loginHandler);
router.post('/auth/register', securityController.registerHandler);
router.post('/auth/forgot-password', securityController.forgotPasswordHandler);
router.post('/auth/reset-password', securityController.resetPasswordHandler);

// Public health check
router.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

export default router;
