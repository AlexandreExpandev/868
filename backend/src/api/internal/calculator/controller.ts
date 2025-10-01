import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { errorResponse, successResponse } from '../../../utils/response';
import { calculatorService } from '../../../services/calculator';

/**
 * @summary
 * Handles addition operation
 */
export async function addHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const schema = z.object({
      numbers: z.array(z.number()).min(2),
    });

    const validatedData = schema.parse(req.body);
    const result = await calculatorService.add(validatedData.numbers, req.user.id);

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
 * Handles subtraction operation
 */
export async function subtractHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const schema = z.object({
      numbers: z.array(z.number()).min(2),
    });

    const validatedData = schema.parse(req.body);
    const result = await calculatorService.subtract(validatedData.numbers, req.user.id);

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
 * Handles clearing calculator state
 */
export async function clearHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await calculatorService.clear(req.user.id);
    res.json(successResponse({ message: 'Calculator state cleared' }));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Retrieves calculation history for the user
 */
export async function getHistoryHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const history = await calculatorService.getHistory(req.user.id);
    res.json(successResponse(history));
  } catch (error) {
    next(error);
  }
}
