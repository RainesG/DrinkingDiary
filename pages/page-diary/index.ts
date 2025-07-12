const { getCocktailByName } = require('../../server/cocktailApi');

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData:
      wx.canIUse('open-data.type.userAvatarUrl') &&
      wx.canIUse('open-data.type.userNickName'),
    searchValue: '',
    drinkInfo: [] as { attribute: string; value: string }[],
  },

  onLoad() {},

  getUserProfile() {
    // Get user info
    wx.getUserProfile({
      desc: 'Used to display user information',
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },

  onInputChange(e: { detail: { value: any } }) {
    this.setData({ searchValue: e.detail.value });
  },

  async getCocktailByName() {
    const cocktailInfo = await getCocktailByName(this.data.searchValue);
    const target = cocktailInfo?.drinks?.[0];
    const drinkInfo = Object.keys(target).reduce(
      (infos, item) => {
        if (target[item]) {
          infos.push({ attribute: item, value: target[item] });
        }
        return infos;
      },
      [] as { attribute: string; value: string }[]
    );
    console.log(drinkInfo);
    this.setData({ drinkInfo });
  },
});
