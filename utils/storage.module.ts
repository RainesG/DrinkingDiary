// utils/storage.js

import { RECORD_TYPE } from 'types';
import {
  handleStorageError,
  showErrorToast,
  showSuccessToast,
} from './error.module';

/**
 * Storage utility for Drinking Diary Mini Program
 */

const STORAGE_KEYS = {
  DRINKING_RECORDS: 'drinking_records',
  USER_SETTINGS: 'user_settings',
  STATISTICS: 'drinking_statistics',
};

/**
 * Save drinking record
 * @param {Object} record - Drinking record object
 */
const saveDrinkingRecord = (record: RECORD_TYPE): boolean => {
  try {
    const records = getDrinkingRecords();
    records.push({
      ...record,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    wx.setStorageSync(STORAGE_KEYS.DRINKING_RECORDS, records);
    showSuccessToast('记录已保存');
    return true;
  } catch (error) {
    const appError = handleStorageError(error, 'Save drinking record');
    showErrorToast(appError);
    return false;
  }
};

/**
 * Get all drinking records
 * @returns {Array} Array of drinking records
 */
const getDrinkingRecords = (): RECORD_TYPE[] => {
  try {
    return wx.getStorageSync(STORAGE_KEYS.DRINKING_RECORDS) || [];
  } catch (error) {
    const appError = handleStorageError(error, 'Get drinking records');
    showErrorToast(appError);
    return [];
  }
};

/**
 * Delete drinking record by ID
 * @param {Number} id - Record ID
 */
const deleteDrinkingRecord = (id: number) => {
  try {
    const records = getDrinkingRecords();
    const filteredRecords = records.filter(
      (record: RECORD_TYPE) => record.id !== id
    );
    wx.setStorageSync(STORAGE_KEYS.DRINKING_RECORDS, filteredRecords);
    showSuccessToast('记录已删除');
    return true;
  } catch (error) {
    const appError = handleStorageError(error, 'Delete drinking record');
    showErrorToast(appError);
    return false;
  }
};

/**
 * Save user settings
 * @param {Object} settings - User settings object
 */
const saveUserSettings = (settings: string) => {
  try {
    wx.setStorageSync(STORAGE_KEYS.USER_SETTINGS, settings);
    showSuccessToast('设置已保存');
    return true;
  } catch (error) {
    const appError = handleStorageError(error, 'Save user settings');
    showErrorToast(appError);
    return false;
  }
};

/**
 * Get user settings
 * @returns {Object} User settings object
 */
const getUserSettings = () => {
  try {
    return wx.getStorageSync(STORAGE_KEYS.USER_SETTINGS) || {};
  } catch (error) {
    const appError = handleStorageError(error, 'Get user settings');
    showErrorToast(appError);
    return {};
  }
};

/**
 * Clear all data
 */
const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      wx.removeStorageSync(key);
    });
    showSuccessToast('数据已清除');
    return true;
  } catch (error) {
    const appError = handleStorageError(error, 'Clear all data');
    showErrorToast(appError);
    return false;
  }
};

export {
  saveDrinkingRecord,
  getDrinkingRecords,
  deleteDrinkingRecord,
  saveUserSettings,
  getUserSettings,
  clearAllData,
  STORAGE_KEYS,
};
