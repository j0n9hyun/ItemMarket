import axios from 'axios';
import { atom, selector } from 'recoil';

export const marketItemIdState = atom({
  key: 'marketItemIdState',
  default: '',
});

export const challengesSelector = selector({
  key: 'challengesSelector',
  get: async () => {
    const response = await axios.get('/market_list');
    return response.data;
  },
});
