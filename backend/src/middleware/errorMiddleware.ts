import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { errorResponse } from '../utils/response';

/**
 * @summary
 * Global error handling middleware
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  // Log the error
  logger.error('Error occurred', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  // Determine status code
  const statusCode = err.statusCode || 500;

  // Send error response
  res
    .status(statusCode)
    .json(
      errorResponse(
        err.message || 'Internal server error',
        process.env.NODE_ENV === 'development' ? err.stack : undefined
      )
    );
}
