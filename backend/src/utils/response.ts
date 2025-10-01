/**
 * @summary
 * Standard response formatting utilities
 */

/**
 * Creates a standardized success response object
 */
export function successResponse<T>(data: T, metadata?: Record<string, any>) {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * Creates a standardized error response object
 */
export function errorResponse(message: string, details?: any) {
  return {
    success: false,
    error: {
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
