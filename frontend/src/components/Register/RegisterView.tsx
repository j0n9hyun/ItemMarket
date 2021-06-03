import { RegisterType } from '../types/authTypes';

const RegisterView = ({
  onChangeId,
  onChangePw,
  onClickLogin,
}: RegisterType) => {
  return (
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
                onChange={onChangePw}
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
  );
};

export default RegisterView;
