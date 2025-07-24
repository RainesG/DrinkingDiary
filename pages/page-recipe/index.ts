import {
  getCocktailInfo,
  getTrendCocktails,
  CocktailType,
} from '@/server/index.module';
import { handleApiError, showErrorToast } from '@/utils/error.module';

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
    drinkInfo: {} as CocktailType,
    cocktails: [] as CocktailType[],
    ingredients: [] as { measure: string; ingredient: string }[],
  },

  onLoad() {
    this.getTrendCocktails();
  },

  onInputChange(e: { detail: { value: any } }) {
    this.setData({ searchValue: e.detail.value });
  },

  async getCocktailByName() {
    try {
      if (!this.data.searchValue) {
        wx.showToast({ title: '请输入', icon: 'none' });
        return;
      }

      const cocktailInfo = await getCocktailInfo(this.data.searchValue);
      console.log(cocktailInfo, 'info log');
      if ((cocktailInfo?.length || 0) > 0) {
        this.setData({
          drinkInfo: cocktailInfo?.[0],
          ingredients: cocktailInfo?.[0]?.ingredients,
        });
      } else {
        showErrorToast({ code: '200', message: JSON.stringify(cocktailInfo) });
      }
    } catch (error) {
      const appError = handleApiError(error);
      showErrorToast(appError);
    }
  },

  async getTrendCocktails() {
    try {
      const trends = await getTrendCocktails();
      console.log(trends, 'trends log');
      if ((trends?.length || 0) > 0) {
        this.setData({
          cocktails: trends,
        });
      } else {
        showErrorToast({ code: '200', message: JSON.stringify(trends) });
      }
    } catch (error) {
      const appError = handleApiError(error);
      showErrorToast(appError);
    }
  },
});
