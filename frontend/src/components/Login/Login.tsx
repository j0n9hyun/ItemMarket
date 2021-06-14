import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/form.scss';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet-async';
import {
  authCheckSelector,
  formIdState,
  formPwState,
  loggedState,
  loginSubmitState,
  tokenState,
} from '../atoms/authState';
import { useRecoilState, useRecoilValue } from 'recoil';
import LoginView from './LoginView';
import { eventType } from '../types/authTypes';
import { useEffect } from 'react';

const Login = () => {
  const history = useHistory();
  const [id, setId] = useRecoilState(formIdState);
  const [pw, setPw] = useRecoilState(formPwState);
  const [logged, setLogged] = useRecoilState(loggedState);
  const [token, setToken] = useRecoilState(tokenState);

  const onClickRegister = () => {
    history.push('/register');
  };
  const onChangeId = (e: eventType) => {
    setId(e.target.value);
  };

  const onChangePw = (e: eventType) => {
    setPw(e.target.value);
  };

  const onSubmit = (e: eventType) => {
    e.preventDefault();
    loginSubmitState(id, pw).then((res: any) => {
      if (res.isAuth) {
        console.log(res);
        setToken(res.token);
        setLogged(true);
        history.push('/');
      } else {
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    setId('');
    setPw('');
  }, [setId, setPw]);
  const props = {
    onClickRegister,
    onChangeId,
    onChangePw,
    id,
    pw,
    onSubmit,
  };
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 로그인</title>
      </Helmet>
      <Header />
      <LoginView {...props} />
      <Footer />
    </>
  );
};

export default Login;
