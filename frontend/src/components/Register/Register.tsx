import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { formIdState, formPwState } from '../atoms/marketState';
import Footer from '../Home/Footer';
import Header from '../Home/Header';

const Register = () => {
  const ref = useRef<any>();
  const history = useHistory();
  const [id, setId] = useRecoilState(formIdState);
  const [pw, setPw] = useRecoilState(formPwState);
  const onClickLogin = () => {
    history.push('/login');
  };
  const onChangeId = (e: any) => {
    setId(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 회원가입</title>
      </Helmet>
      <Header />
      <div className='auth-wrapper'>
        <form className='form-wrapper register'>
          <div className='form-inside'>
            <div className='login-title'>회원가입</div>
            <div className='form-label'>
              <label>아이디</label>
              <div>
                <input
                  type='text'
                  className='form-input'
                  placeholder='아이디'
                  ref={ref}
                  onChange={onChangeId}
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
            <div className='form-label'>
              <label className=''>비밀번호 확인</label>
              <div>
                <input
                  type='password'
                  className='form-input'
                  placeholder='비밀번호'
                />
              </div>
            </div>
            <div className='form-label'>
              <label className=''>닉네임</label>
              <div>
                <input
                  type='text'
                  className='form-input'
                  placeholder='비밀번호'
                />
              </div>
            </div>
            <button className='form-btn'>회원가입</button>
            <div className='help-btn' onClick={onClickLogin}>
              돌아가기
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
