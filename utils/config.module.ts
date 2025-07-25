// utils/config.js

/**
 * Configuration constants for Drinking Diary Mini Program
 */

// App configuration
const APP_CONFIG = {
  NAME: 'Drinking Diary',
  VERSION: '1.0.0',
  DESCRIPTION: 'Track your drinking habits and maintain a drinking diary',
};

// Storage keys
const STORAGE_KEYS = {
  DRINKING_RECORDS: 'drinking_records',
  USER_SETTINGS: 'user_settings',
  STATISTICS: 'drinking_statistics',
  USER_PROFILE: 'user_profile',
  APP_SETTINGS: 'app_settings',
};

// Default settings
const DEFAULT_SETTINGS = {
  theme: 'light',
  language: 'zh-CN',
  notifications: true,
  reminderTime: '20:00',
  weeklyGoal: 0,
  privacyMode: false,
};

// Validation rules
const VALIDATION_RULES = {
  MIN_AMOUNT: 1,
  MAX_AMOUNT: 10000,
  MAX_RECORDS_PER_DAY: 50,
  MAX_RECORDS_TOTAL: 10000,
};

// Time formats
const TIME_FORMATS = {
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm:ss',
  DATETIME: 'YYYY-MM-DD HH:mm:ss',
  DISPLAY_DATE: 'MM月DD日',
  DISPLAY_TIME: 'HH:mm',
  DISPLAY_DATETIME: 'MM月DD日 HH:mm',
};

// API endpoints (if using cloud functions)
const API_ENDPOINTS = {
  BASE_URL: 'https://your-api-domain.com',
  UPLOAD_RECORD: '/api/records',
  GET_STATISTICS: '/api/statistics',
  SYNC_DATA: '/api/sync',
};

// Error messages
const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接失败，请检查网络设置',
  SAVE_FAILED: '保存失败，请重试',
  LOAD_FAILED: '加载失败，请重试',
  INVALID_INPUT: '输入数据无效，请检查后重试',
  PERMISSION_DENIED: '权限不足，无法执行此操作',
};

// Success messages
const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: '保存成功',
  DELETE_SUCCESS: '删除成功',
  UPDATE_SUCCESS: '更新成功',
};

export {
  APP_CONFIG,
  STORAGE_KEYS,
  DEFAULT_SETTINGS,
  VALIDATION_RULES,
  TIME_FORMATS,
  API_ENDPOINTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
