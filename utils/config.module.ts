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

// Drink types configuration
const DRINK_TYPES = {
  BEER: {
    name: 'beer',
    label: '啤酒',
    icon: '🍺',
    defaultAmount: 330,
    alcoholContent: 5.0,
  },
  WINE: {
    name: 'wine',
    label: '红酒',
    icon: '🍷',
    defaultAmount: 150,
    alcoholContent: 12.0,
  },
  SPIRIT: {
    name: 'spirit',
    label: '白酒',
    icon: '🥃',
    defaultAmount: 30,
    alcoholContent: 40.0,
  },
  COCKTAIL: {
    name: 'cocktail',
    label: '鸡尾酒',
    icon: '🍸',
    defaultAmount: 200,
    alcoholContent: 15.0,
  },
  OTHER: {
    name: 'other',
    label: '其他',
    icon: '🍶',
    defaultAmount: 100,
    alcoholContent: 10.0,
  },
};

// UI configuration
const UI_CONFIG = {
  PRIMARY_COLOR: '#07c160',
  SECONDARY_COLOR: '#1989fa',
  WARNING_COLOR: '#ff976a',
  DANGER_COLOR: '#ee0a24',
  SUCCESS_COLOR: '#07c160',
  BACKGROUND_COLOR: '#f7f8fa',
  TEXT_COLOR: '#323233',
  TEXT_COLOR_SECONDARY: '#969799',
  BORDER_COLOR: '#ebedf0',
  BORDER_RADIUS: '0.5rem',
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
  DRINK_TYPES,
  UI_CONFIG,
  STORAGE_KEYS,
  DEFAULT_SETTINGS,
  VALIDATION_RULES,
  TIME_FORMATS,
  API_ENDPOINTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
