/**
 * @summary
 * Type definitions for calculator service
 */

/**
 * Represents a calculation operation type
 */
export type CalculationOperation = 'addition' | 'subtraction';

/**
 * Represents the result of a calculation operation
 */
export interface CalculationResult {
  id: number;
  userId: number;
  operation: CalculationOperation;
  input: number[];
  result: number;
  timestamp: Date;
}
