import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { formIdState, formPwState } from '../atoms/marketState';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import { eventType } from '../types/authTypes';
import RegisterView from './RegisterView';

const Register = () => {
  const history = useHistory();
  const setId = useSetRecoilState(formIdState);
  const setPw = useSetRecoilState(formPwState);
  const onClickLogin = () => {
    history.push('/login');
  };
  const onChangeId = (e: eventType) => {
    setId(e.target.value);
  };
  const onChangePw = (e: eventType) => {
    setPw(e.target.value);
  };
  const props = {
    history,
    onChangeId,
    onChangePw,
    onClickLogin,
  };
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 회원가입</title>
      </Helmet>
      <Header />
      <RegisterView {...props} />
      <Footer />
    </>
  );
};

export default Register;
