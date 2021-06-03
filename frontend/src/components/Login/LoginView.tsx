import { LoginType } from '../types/authTypes';

const LoginView = ({
  onClickRegister,
  onChangeId,
  onChangePw,
  id,
  pw,
  onSubmit,
}: LoginType) => {
  return (
    <div className='auth-wrapper'>
      <form className='form-wrapper' onSubmit={onSubmit}>
        <div className='form-inside'>
          <div className='login-title'>로그인</div>
          <div className='form-label'>
            <label>아이디</label>
            <div>
              <input
                type='text'
                className='form-input'
                placeholder='아이디'
                onChange={onChangeId}
                value={id}
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
                onChange={onChangePw}
                value={pw}
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
  );
};

export default LoginView;
