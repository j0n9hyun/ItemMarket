import axios from 'axios';
import { atom } from 'recoil';

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

export async function registerSubmitState(
  id: string,
  pw: string,
  name: string
) {
  const response = await axios.post('http://localhost:8080/register', {
    userId: id,
    password: pw,
    name: name,
  });
  return response.data;
}

export async function loginSubmitState(id: string, pw: string) {
  const response = await axios.post('http://localhost:8080/login', {
    userId: id,
    password: pw,
  });
  return response.data;
}
