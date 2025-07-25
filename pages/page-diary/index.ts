import dayjs = require('dayjs');

Page({
  data: {
    records: [
      {
        amount: 0,
        id: '123123',
        name: 'test',
      },
    ] as {
      amount: number;
      id: string;
      name: string;
      thumb?: string;
      date?: dayjs.Dayjs;
    }[],
    summary: {
      totalAmount: 0,
      totalAlcohol: 0,
      rating: '',
    },
  },

  onLoad() {},

  updateSummary() {
    // Get all records for selectedDate
    let totalAmount = 0;
    let totalAlcohol = 0;
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
