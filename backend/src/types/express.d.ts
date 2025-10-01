/**
 * @summary
 * Type definitions for Express request extensions
 */

declare namespace Express {
  export interface Request {
    user?: {
      id: number;
      email: string;
    };
  }
}
