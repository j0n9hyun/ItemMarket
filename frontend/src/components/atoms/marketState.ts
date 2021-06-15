import axios from 'axios';
import { atom, selector } from 'recoil';

export const marketItemIdState = atom({
  key: 'marketItemIdState',
  default: '',
});

export const challengesSelector = selector({
  key: 'challengesSelector',
  get: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_IP}/market`
    );
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
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/market`,
    {
      name: name,
      title: title,
      content: content,
      price: price,
      url: url,
    }
  );

  return response.data;
}
