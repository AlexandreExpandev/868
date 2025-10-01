/**
 * @summary
 * Custom error classes for the application
 */

/**
 * Base application error class
 */
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Authentication related errors
 */
export class AuthError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}

/**
 * Validation related errors
 */
export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

/**
 * Not found errors
 */
export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}

/**
 * Permission related errors
 */
export class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}
