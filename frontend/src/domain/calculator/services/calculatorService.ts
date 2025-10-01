import { api } from '@/core/lib/api';
import type { AddPayload, SubtractPayload, CalculationResult, HistoryEntry } from '../types';

/**
 * @service calculatorService
 * @summary Provides methods for calculator-related API calls.
 */
export const calculatorService = {
  add: async (payload: AddPayload): Promise<CalculationResult> => {
    const { data } = await api.post('/internal/calculator/add', payload);
    return data.data;
  },

  subtract: async (payload: SubtractPayload): Promise<CalculationResult> => {
    const { data } = await api.post('/internal/calculator/subtract', payload);
    return data.data;
  },

  clear: async (): Promise<void> => {
    await api.post('/internal/calculator/clear');
  },

  getHistory: async (): Promise<HistoryEntry[]> => {
    const { data } = await api.get('/internal/calculator/history');
    return data.data;
  },
};
