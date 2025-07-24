import { INGREDIENT_TYPE } from '@/types';
import { httpClient } from './http.module';
import { handleApiError, showErrorToast } from '@/utils/error.module';

type CocktailType = {
  id: number;
  name: string;
  dateModified: string;
  alcoholic: string;
  category: string;
  thumb: string;
  glass: string;
  ingredients: INGREDIENT_TYPE;
  instructions: string;
  IBA: string;
};

const getCocktailInfo = async (name: string) => {
  try {
    const res: { data?: CocktailType[] } = await httpClient.get({
      url: '/api/getCocktailInfo',
      payload: `name=${name}`,
    });
    return res?.data;
  } catch (error) {
    const appError = handleApiError(error);
    showErrorToast(appError);
    throw appError;
  }
};

const getTrendCocktails = async () => {
  try {
    const res: { data?: CocktailType[] } = await httpClient.get({
      url: '/api/getTrendCocktails',
    });
    return res?.data;
  } catch (error) {
    const appError = handleApiError(error);
    showErrorToast(appError);
    throw appError;
  }
};

export { getCocktailInfo, getTrendCocktails };
export type { CocktailType };
