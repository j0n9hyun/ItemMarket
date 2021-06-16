import axios from 'axios';
import { atom, selector } from 'recoil';
import { config } from '../../config';

export const marketItemIdState = atom({
  key: 'marketItemIdState',
  default: '',
});

export const challengesSelector = selector({
  key: 'challengesSelector',
  get: async () => {
    const response = await axios.get(`${config.REMOTE}/market`);
    return response.data;
  },
});

export async function createArticle(
  name: string,
  title: string,
  content: string,
  price: number,
  url: string
) {
  const response = await axios.post(`${config.REMOTE}/market`, {
    name: name,
    title: title,
    content: content,
    price: price,
    url: url,
  });

  return response.data;
}
