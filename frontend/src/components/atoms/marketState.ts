import axios from 'axios';
import { atom, selector } from 'recoil'

export const marketItemIdState = atom({
  key: 'marketItemIdState',
  default: '',
})

export const formIdState = atom({
  key: 'formIdState',
  default: '',
})
export const formPwState = atom({
  key: 'formPwState',
  default: '',
})

export const challengesSelector = selector({
  key: 'challengesSelector',
  get: async() => {
    const response: any = await axios.get('/market_list')
    return response.data;
  }
})