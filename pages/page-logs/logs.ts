import { formatTime } from '@/utils/util.module';
import dayjs = require('dayjs');

Page({
  data: {
    logs: [],
    selectedDate: dayjs(new Date()).format('YYYY-MM-DD'),
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(
        (log: string | number | Date) => {
          return {
            date: formatTime(new Date(log)),
            timeStamp: log,
          };
        }
      ),
    });
  },
  onDateChange(e: any) {
    this.setData({ selectedDate: e.detail.value }, () => {});
  },

  onDateClick(e: any) {
    let date;
    switch (e.currentTarget.dataset.type) {
      case 'previous':
        date = dayjs(this.data.selectedDate)
          .subtract(1, 'day')
          .format('YYYY-MM-DD');
        break;
      case 'next':
        date = dayjs(this.data.selectedDate).add(1, 'day').format('YYYY-MM-DD');
        break;
      default:
        break;
    }
    this.setData({ selectedDate: date }, () => {});
  },
});
