import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { errorResponse } from '../utils/response';

/**
 * @summary
 * Authentication middleware to verify JWT tokens
 * and attach user information to the request object
 */
export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json(errorResponse('Authentication required'));
      return;
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json(errorResponse('Authentication token missing'));
      return;
    }

    try {
      const decoded = jwt.verify(token, config.security.jwtSecret);
      req.user = decoded as { id: number; email: string };
      next();
    } catch (error) {
      res.status(401).json(errorResponse('Invalid or expired token'));
    }
  } catch (error) {
    next(error);
  }
}
