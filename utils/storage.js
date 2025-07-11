// utils/storage.js

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
const saveDrinkingRecord = (record) => {
  try {
    const records = getDrinkingRecords();
    records.push({
      ...record,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    wx.setStorageSync(STORAGE_KEYS.DRINKING_RECORDS, records);
    return true;
  } catch (error) {
    console.error('Save drinking record failed:', error);
    return false;
  }
};

/**
 * Get all drinking records
 * @returns {Array} Array of drinking records
 */
const getDrinkingRecords = () => {
  try {
    return wx.getStorageSync(STORAGE_KEYS.DRINKING_RECORDS) || [];
  } catch (error) {
    console.error('Get drinking records failed:', error);
    return [];
  }
};

/**
 * Delete drinking record by ID
 * @param {Number} id - Record ID
 */
const deleteDrinkingRecord = (id) => {
  try {
    const records = getDrinkingRecords();
    const filteredRecords = records.filter((record) => record.id !== id);
    wx.setStorageSync(STORAGE_KEYS.DRINKING_RECORDS, filteredRecords);
    return true;
  } catch (error) {
    console.error('Delete drinking record failed:', error);
    return false;
  }
};

/**
 * Save user settings
 * @param {Object} settings - User settings object
 */
const saveUserSettings = (settings) => {
  try {
    wx.setStorageSync(STORAGE_KEYS.USER_SETTINGS, settings);
    return true;
  } catch (error) {
    console.error('Save user settings failed:', error);
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
    console.error('Get user settings failed:', error);
    return {};
  }
};

/**
 * Clear all data
 */
const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      wx.removeStorageSync(key);
    });
    return true;
  } catch (error) {
    console.error('Clear all data failed:', error);
    return false;
  }
};

module.exports = {
  saveDrinkingRecord,
  getDrinkingRecords,
  deleteDrinkingRecord,
  saveUserSettings,
  getUserSettings,
  clearAllData,
  STORAGE_KEYS,
};
