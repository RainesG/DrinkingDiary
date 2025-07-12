const services = require('./server/index');
// app.js
App({
  service: services,

  onLaunch() {
    // Mini Program initialization logic
    console.log('Mini Program launched');
  },

  onShow() {
    // Mini Program shown logic
  },

  onHide() {
    // Mini Program hidden logic
  },

  globalData: {
    userInfo: null,
  },
});
