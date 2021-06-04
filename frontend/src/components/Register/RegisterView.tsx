import { RegisterType } from '../types/authTypes';

const RegisterView = ({
  onChangeId,
  onChangePw,
  onClickLogin,
  onSubmit,
  onChangeName,
  onChangePwConfirm,
}: RegisterType) => {
  return (
    <div className='auth-wrapper'>
      <form className='form-wrapper register' onSubmit={onSubmit}>
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
                onChange={onChangePw}
                minLength={2}
              />
            </div>
          </div>
          <div className='form-label'>
            <label className=''>비밀번호 확인</label>
            <div>
              <input
                type='password'
                className='form-input'
                placeholder='비밀번호 확인'
                onChange={onChangePwConfirm}
                minLength={2}
              />
            </div>
          </div>
          <div className='form-label'>
            <label className=''>닉네임</label>
            <div>
              <input
                type='text'
                className='form-input'
                placeholder='닉네임'
                onChange={onChangeName}
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
