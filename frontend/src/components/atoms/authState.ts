import axios from 'axios';
import { atom, selector } from 'recoil';
import { config } from '../../config';
import { getToken } from '../../db/token';

export const formIdState = atom({
  key: 'formIdState',
  default: '',
});
export const formPwState = atom({
  key: 'formPwState',
  default: '',
});
export const formPwConfirmState = atom({
  key: 'formPwConfirmState',
  default: '',
});
export const formNameState = atom({
  key: 'formNameState',
  default: '',
});

export const loggedState = atom({
  key: 'loggedState',
  default: false,
});

export async function registerSubmitState(
  id: string,
  pw: string,
  name: string
) {
  const response = await axios.post(
    `${config.REMOTE}/register`,
    {
      userId: id,
      password: pw,
      name: name,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function loginSubmitState(id: string, pw: string) {
  const response = await axios.post(
    `${config.REMOTE}/login`,
    {
      userId: id,
      password: pw,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function logoutSubmitState() {
  const response = await axios.get(`${config.REMOTE}/logout`, {
    withCredentials: true,
  });
  return response.data;
}

export const authCheckSelector = selector({
  key: 'authCheckSelector',
  get: async () => {
    const token = getToken();
    const response: any = await axios
      .get(`${config.REMOTE}/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .catch((err: any) => err.response.status);

    return response.data;
  },
});
