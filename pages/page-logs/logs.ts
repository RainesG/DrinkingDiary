// logs.js
const util = require('../../utils/util.js');

Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(
        (log: string | number | Date) => {
          return {
            date: util.formatTime(new Date(log)),
            timeStamp: log,
          };
        }
      ),
    });
  },
});
