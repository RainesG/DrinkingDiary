/**
 * Error handling utility for Drinking Diary Mini Program
 */

import { ERROR_MESSAGES } from './config.module';

export interface AppError {
  code: string;
  message: string;
  details?: any;
}

/**
 * Handle API errors
 */
export const handleApiError = (error: any): AppError => {
  console.error('API Error:', error);

  if (error.errMsg) {
    return {
      code: 'API_ERROR',
      message: error.errMsg,
      details: error,
    };
  }

  if (error.statusCode) {
    return {
      code: 'HTTP_ERROR',
      message: `HTTP ${error.statusCode}: ${error.data?.message || 'Unknown error'}`,
      details: error,
    };
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: ERROR_MESSAGES.NETWORK_ERROR,
    details: error,
  };
};

/**
 * Handle storage errors
 */
export const handleStorageError = (error: any, operation: string): AppError => {
  console.error(`Storage Error (${operation}):`, error);

  return {
    code: 'STORAGE_ERROR',
    message: `${operation} failed: ${error.message || 'Unknown error'}`,
    details: error,
  };
};

/**
 * Show error toast
 */
export const showErrorToast = (error: AppError) => {
  wx.showToast({
    title: error.message,
    icon: 'none',
    duration: 3000,
  });
};

/**
 * Show success toast
 */
export const showSuccessToast = (message: string) => {
  wx.showToast({
    title: message,
    icon: 'success',
    duration: 2000,
  });
};

/**
 * Validate required fields
 */
export const validateRequired = (
  data: any,
  fields: string[]
): AppError | null => {
  for (const field of fields) {
    if (
      !data[field] ||
      (typeof data[field] === 'string' && data[field].trim() === '')
    ) {
      return {
        code: 'VALIDATION_ERROR',
        message: `${field} is required`,
        details: { field, value: data[field] },
      };
    }
  }
  return null;
};

/**
 * Validate number range
 */
export const validateNumberRange = (
  value: number,
  min: number,
  max: number,
  fieldName: string
): AppError | null => {
  if (value < min || value > max) {
    return {
      code: 'VALIDATION_ERROR',
      message: `${fieldName} must be between ${min} and ${max}`,
      details: { field: fieldName, value, min, max },
    };
  }
  return null;
};
