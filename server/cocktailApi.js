import { httpClient } from './http';

export const getCocktailByName = async name => {
  const res = await httpClient.get('recipe', `s=${name}`);
  return res.data;
};
