import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/form.scss';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { formIdState, formPwState } from '../atoms/marketState';
import { useRecoilState } from 'recoil';
import LoginView from './LoginView';
import { eventType } from '../types/authTypes';

const Login = () => {
  const history = useHistory();
  const [id, setId] = useRecoilState(formIdState);
  const [pw, setPw] = useRecoilState(formPwState);

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
    console.log(id, pw);
  };
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
