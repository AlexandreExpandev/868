import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import { errorResponse } from '../utils/response';

/**
 * @summary
 * Generic validation middleware factory for Zod schemas
 */
export function validationMiddleware(schema: AnyZodObject) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      res.status(400).json(errorResponse('Validation failed', error.errors));
    }
  };
}
