import { useHistory } from 'react-router';
import logo from '../../static/img/jjong.png';
const Header = () => {
  const history = useHistory();
  const onClickLogo = () => {
    history.push('/');
  };
  const onClickLogin = () => {
    history.push('/login');
  };
  const onClickRegister = () => {
    history.push('/register');
  };
  return (
    <header className='home-header'>
      <div className='home-logo' onClick={onClickLogo}>
        <img src={logo} alt='이미지 없음 ' />
      </div>
      <div className='home-bar-btns'>
        <span className='home-bar-btn' onClick={onClickLogin}>
          로그인
        </span>
        <span className='home-bar-btn' onClick={onClickRegister}>
          회원가입
        </span>
      </div>
    </header>
  );
};

export default Header;
