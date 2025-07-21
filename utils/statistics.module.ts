// utils/statistics.js

import { RECORD_TYPE, STATISTICS_TYPE } from 'types';

/**
 * Statistics utility for Drinking Diary Mini Program
 */

import { getDrinkingRecords } from './storage.module';

/**
 * Calculate total alcohol consumption for a given period
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {Object} Statistics object
 */
const calculatePeriodStatistics = (startDate: Date, endDate: Date): object => {
  const records = getDrinkingRecords();
  const filteredRecords = records.filter((record: RECORD_TYPE) => {
    const recordDate = new Date(record?.timestamp || '');
    return recordDate >= startDate && recordDate <= endDate;
  });

  const statistics: STATISTICS_TYPE = {
    totalRecords: filteredRecords.length,
    totalAmount: 0,
    averageAmount: 0,
    drinkTypeBreakdown: {},
    dailyBreakdown: {},
  };

  filteredRecords.forEach((record: RECORD_TYPE) => {
    // Add to total amount
    statistics.totalAmount += record.amount || 0;

    // Count by drink type
    const drinkType = record.drinkType || 'unknown';
    statistics.drinkTypeBreakdown[drinkType] =
      (statistics.drinkTypeBreakdown[drinkType] || 0) + (record.amount || 0);

    // Count by day
    const dateKey = new Date(record?.timestamp || '').toDateString();
    statistics.dailyBreakdown[dateKey] =
      (statistics.dailyBreakdown[dateKey] || 0) + (record.amount || 0);
  });

  // Calculate average
  if (statistics.totalRecords > 0) {
    statistics.averageAmount = statistics.totalAmount / statistics.totalRecords;
  }

  return statistics;
};

/**
 * Get today's statistics
 * @returns {Object} Today's statistics
 */
const getTodayStatistics = () => {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59
  );

  return calculatePeriodStatistics(startOfDay, endOfDay);
};

/**
 * Get this week's statistics
 * @returns {Object} This week's statistics
 */
const getThisWeekStatistics = () => {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return calculatePeriodStatistics(startOfWeek, endOfWeek);
};

/**
 * Get this month's statistics
 * @returns {Object} This month's statistics
 */
const getThisMonthStatistics = () => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  return calculatePeriodStatistics(startOfMonth, endOfMonth);
};

/**
 * Get drinking trends
 * @param {Number} days - Number of days to analyze
 * @returns {Array} Array of daily statistics
 */
const getDrinkingTrends = (days = 7) => {
  const records = getDrinkingRecords();
  const trends = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateKey = date.toDateString();

    const dayRecords = records.filter(record => {
      const recordDate = new Date(record?.timestamp || '');
      return recordDate.toDateString() === dateKey;
    });

    const dayTotal = dayRecords.reduce(
      (sum, record) => sum + (record.amount || 0),
      0
    );

    trends.push({
      date: dateKey,
      total: dayTotal,
      count: dayRecords.length,
    });
  }

  return trends;
};

export {
  calculatePeriodStatistics,
  getTodayStatistics,
  getThisWeekStatistics,
  getThisMonthStatistics,
  getDrinkingTrends,
};
