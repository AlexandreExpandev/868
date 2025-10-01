export interface AddPayload {
  numbers: number[];
}

export interface SubtractPayload {
  numbers: [number, number];
}

export interface CalculationResult {
  result: number;
}

export interface HistoryEntry {
  id: string;
  operation: 'add' | 'subtract';
  operands: number[];
  result: number;
  createdAt: string;
}
