import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/form.scss';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const ref = useRef<any>();
  const history = useHistory();
  const onClickRegister = () => {
    history.push('/register');
  };
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 로그인</title>
      </Helmet>
      <Header />
      <div className='auth-wrapper'>
        <form className='form-wrapper'>
          <div className='form-inside'>
            <div className='login-title'>로그인</div>
            <div className='form-label'>
              <label>아이디</label>
              <div>
                <input
                  type='text'
                  className='form-input'
                  placeholder='아이디'
                  ref={ref}
                />
              </div>
            </div>
            <div className='form-label'>
              <label className=''>비밀번호</label>
              <div>
                <input
                  type='password'
                  className='form-input'
                  placeholder='비밀번호'
                />
              </div>
            </div>
            <button className='form-btn'>로그인</button>
            <div className='help-btn' onClick={onClickRegister}>
              회원가입
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
