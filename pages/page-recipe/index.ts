import { getCocktailByName, CocktailType } from '@/server/index.module';
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
    ingredients: [''],
  },

  onLoad() {},

  onInputChange(e: { detail: { value: any } }) {
    this.setData({ searchValue: e.detail.value });
  },

  async getCocktailByName() {
    try {
      const cocktailInfo = await getCocktailByName(this.data.searchValue);
      const target = cocktailInfo?.[0];
      if (target) {
        const ingredients = Object.keys(target).reduce((ingredients, item) => {
          if (target[item] && item.includes('strIngredient')) {
            ingredients.push(target[item]);
          }
          return ingredients;
        }, [] as string[]);
        console.log(target);
        this.setData({ drinkInfo: target, ingredients });
      }
    } catch (error) {
      const appError = handleApiError(error);
      showErrorToast(appError);
    }
  },
});
