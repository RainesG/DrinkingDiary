import { httpClient } from './http.module';

type CocktailType = {
  [key: string]: string;
};

const getCocktailByName = async (name: string) => {
  try {
    const res: { data?: CocktailType[] } = await httpClient.get({
      service: 'cocktail',
      payload: `name=${name}`,
    });
    return res?.data;
  } catch (error) {
    wx.showToast({
      title: (error as unknown as { errMsg: string })?.errMsg,
      icon: 'error',
      duration: 3000,
    });
    throw error;
  }
};

export { getCocktailByName };
export type { CocktailType };
