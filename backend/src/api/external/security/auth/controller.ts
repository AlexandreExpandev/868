import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { errorResponse, successResponse } from '../../../../utils/response';
import { authService } from '../../../../services/auth';

/**
 * @summary
 * Handles user login authentication
 */
export async function loginHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const validatedData = loginSchema.parse(req.body);
    const result = await authService.login(validatedData);

    res.json(successResponse(result));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Invalid input data', error.errors));
    } else {
      next(error);
    }
  }
}

/**
 * @summary
 * Handles new user registration
 */
export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const registerSchema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const validatedData = registerSchema.parse(req.body);
    const result = await authService.register(validatedData);

    res.status(201).json(successResponse(result));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Invalid input data', error.errors));
    } else {
      next(error);
    }
  }
}

/**
 * @summary
 * Handles password reset request
 */
export async function forgotPasswordHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const schema = z.object({
      email: z.string().email(),
    });

    const validatedData = schema.parse(req.body);
    await authService.forgotPassword(validatedData.email);

    res.json(
      successResponse({ message: 'Password reset instructions sent to email if account exists' })
    );
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Invalid input data', error.errors));
    } else {
      next(error);
    }
  }
}

/**
 * @summary
 * Handles password reset with token
 */
export async function resetPasswordHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const schema = z.object({
      token: z.string(),
      password: z.string().min(6),
    });

    const validatedData = schema.parse(req.body);
    await authService.resetPassword(validatedData.token, validatedData.password);

    res.json(successResponse({ message: 'Password reset successful' }));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Invalid input data', error.errors));
    } else {
      next(error);
    }
  }
}
