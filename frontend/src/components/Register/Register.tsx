import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import {
  formIdState,
  formPwState,
  formNameState,
  registerSubmitState,
  formPwConfirmState,
} from '../atoms/authState';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import { eventType } from '../types/authTypes';
import RegisterView from './RegisterView';

const Register = () => {
  const history = useHistory();
  const [pw, setPw] = useRecoilState(formPwState);
  const [id, setId] = useRecoilState(formIdState);
  const [pwConfirm, setPwConfirm] = useRecoilState(formPwConfirmState);
  const [name, setName] = useRecoilState(formNameState);
  const onClickLogin = () => {
    history.push('/login');
  };
  const onChangeId = (e: eventType) => {
    setId(e.target.value);
  };
  const onChangePw = (e: eventType) => {
    setPw(e.target.value);
  };
  const onChangePwConfirm = (e: eventType) => {
    setPwConfirm(e.target.value);
  };
  const onChangeName = (e: eventType) => {
    setName(e.target.value);
  };

  const onSubmit = (e: eventType) => {
    e.preventDefault();
    if (pw === pwConfirm) {
      registerSubmitState(id, pw, name);
      window.location.reload();
    } else {
      console.log('Not Match');
    }
  };

  const props = {
    history,
    onChangeId,
    onChangePw,
    onChangePwConfirm,
    onClickLogin,
    onChangeName,
    onSubmit,
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
