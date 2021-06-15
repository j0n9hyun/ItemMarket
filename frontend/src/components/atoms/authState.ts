import axios from 'axios';
import { atom, selector } from 'recoil';
import { getToken, saveToken } from '../../db/token';

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
    `${process.env.REACT_APP_SERVER_IP}/register`,
    {
      userId: id,
      password: pw,
      name: name,
    }
  );
  return response.data;
}

export async function loginSubmitState(id: string, pw: string) {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_IP}/login`,
    {
      userId: id,
      password: pw,
    }
  );
  saveToken(response.data.token);
  return response.data;
}

export const authCheckSelector = selector({
  key: 'authCheckSelector',
  get: async () => {
    const token = getToken();
    const response: any = await axios
      .get(`${process.env.REACT_APP_SERVER_IP}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err: any) => err.response.status);

    return response.data;
  },
});
