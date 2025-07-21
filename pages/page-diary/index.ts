import { DRINK_TYPES } from '../../utils/config.module';
import {
  saveDrinkingRecord,
  getDrinkingRecords,
} from '../../utils/storage.module';

function getDefaultQuickDrinks() {
  return Object.values(DRINK_TYPES).map((drink: any) => ({
    ...drink,
    amount: drink.defaultAmount,
  }));
}

function getDateString(date: Date) {
  // Format as YYYY-MM-DD
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

Page({
  data: {
    selectedDate: getDateString(new Date()),
    quickDrinks: getDefaultQuickDrinks(),
    summary: {
      totalAmount: 0,
      totalAlcohol: 0,
      rating: '',
    },
  },

  onLoad() {
    this.updateSummary();
  },

  onDateChange(e: any) {
    this.setData({ selectedDate: e.detail.value }, () => {
      this.updateSummary();
    });
  },

  onMinus(e: any) {
    const index = e.currentTarget.dataset.index;
    const quickDrinks = [...this.data.quickDrinks];
    quickDrinks[index].amount = Math.max(quickDrinks[index].amount - 10, 0);
    this.setData({ quickDrinks });
  },

  onAdd(e: any) {
    const index = e.currentTarget.dataset.index;
    const quickDrinks = [...this.data.quickDrinks];
    quickDrinks[index].amount += 10;
    this.setData({ quickDrinks });
  },

  onAmountInput(e: any) {
    const index = e.currentTarget.dataset.index;
    const value = parseInt(e.detail.value) || 0;
    const quickDrinks = [...this.data.quickDrinks];
    quickDrinks[index].amount = value;
    this.setData({ quickDrinks });
  },

  onQuickAdd(e: any) {
    const index = e.currentTarget.dataset.index;
    const drink = this.data.quickDrinks[index];
    if (drink.amount > 0) {
      saveDrinkingRecord({
        drinkType: drink.name,
        amount: drink.amount,
        date: this.data.selectedDate,
      });
      wx.showToast({ title: '已添加', icon: 'success' });
      this.updateSummary();
    } else {
      wx.showToast({ title: '请输入数量', icon: 'none' });
    }
  },

  onCustomSave(e: any) {
    const { drinkType, amount } = e.detail;
    if (amount > 0) {
      saveDrinkingRecord({
        drinkType,
        amount,
        date: this.data.selectedDate,
      });
      wx.showToast({ title: '已添加', icon: 'success' });
      this.updateSummary();
    } else {
      wx.showToast({ title: '请输入数量', icon: 'none' });
    }
  },

  updateSummary() {
    // Get all records for selectedDate
    const allRecords = getDrinkingRecords();
    const records = allRecords.filter(
      (r: any) =>
        (r.date || r.timestamp?.slice(0, 10)) === this.data.selectedDate
    );
    let totalAmount = 0;
    let totalAlcohol = 0;
    records.forEach((r: any) => {
      const drink = Object.values(DRINK_TYPES).find(
        (d: any) => d.name === r.drinkType
      );
      totalAmount += r.amount;
      if (drink) {
        totalAlcohol += r.amount * (drink.alcoholContent / 100);
      }
    });
    let rating = '';
    if (totalAlcohol > 200) {
      rating = 'Wow, you can drink so much!';
    } else if (totalAlcohol > 100) {
      rating = 'Impressive capacity!';
    } else if (totalAlcohol > 0) {
      rating = 'Enjoy responsibly!';
    } else {
      rating = 'No drinks today!';
    }
    this.setData({
      summary: {
        totalAmount,
        totalAlcohol: parseFloat(totalAlcohol.toFixed(1)),
        rating,
      },
    });
  },
});
