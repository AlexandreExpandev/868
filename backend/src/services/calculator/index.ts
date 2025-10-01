import { CalculationResult } from './types';

/**
 * @summary
 * Calculator service for performing mathematical operations
 */
export const calculatorService = {
  /**
   * Performs addition operation on an array of numbers
   */
  async add(numbers: number[], userId: number): Promise<CalculationResult> {
    // Validate input
    if (!numbers || numbers.length < 2) {
      throw new Error('At least two numbers are required for addition');
    }

    // Perform calculation
    const result = numbers.reduce((sum, num) => sum + num, 0);

    // Create calculation record
    const calculation = {
      id: Date.now(),
      userId,
      operation: 'addition',
      input: numbers,
      result,
      timestamp: new Date(),
    };

    // In a real application, save to database
    // For this foundation, we just return the result
    return calculation;
  },

  /**
   * Performs subtraction operation on an array of numbers
   */
  async subtract(numbers: number[], userId: number): Promise<CalculationResult> {
    // Validate input
    if (!numbers || numbers.length < 2) {
      throw new Error('At least two numbers are required for subtraction');
    }

    // Perform calculation (first number minus all others)
    const result = numbers.slice(1).reduce((diff, num) => diff - num, numbers[0]);

    // Create calculation record
    const calculation = {
      id: Date.now(),
      userId,
      operation: 'subtraction',
      input: numbers,
      result,
      timestamp: new Date(),
    };

    // In a real application, save to database
    // For this foundation, we just return the result
    return calculation;
  },

  /**
   * Clears calculator state for a user
   */
  async clear(userId: number): Promise<void> {
    // In a real application, this might clear session data or recent calculations
    // For this foundation, it's a placeholder
    return;
  },

  /**
   * Retrieves calculation history for a user
   */
  async getHistory(userId: number): Promise<CalculationResult[]> {
    // In a real application, this would fetch from database
    // For this foundation, return empty array
    return [];
  },
};
