import { formatTime } from '@/utils/util.module';

Page({
  data: {
    logs: [],
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
});
