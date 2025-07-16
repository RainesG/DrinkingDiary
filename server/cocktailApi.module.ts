import { httpClient } from './http.module';

type CocktailType = {
  [key: string]: string;
};

const getCocktailByName = async (name: string) => {
  try {
    const res: { data?: { drinks: CocktailType[] } } = await httpClient.get({
      service: 'recipe',
      payload: `s=${name}`,
    });
    return res?.data;
  } catch (error) {
    throw error;
  }
};

export { getCocktailByName };
export type { CocktailType };
