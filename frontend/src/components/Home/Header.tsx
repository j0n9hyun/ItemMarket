import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { clearToken } from '../../db/token';
import logo from '../../static/img/jjong.png';
import { loggedState } from '../atoms/authState';
const Header = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useRecoilState(loggedState);
  const onClickLogo = () => {
    history.push('/');
  };
  const onClickLogin = () => {
    history.push('/login');
  };
  const onClickLogout = () => {
    setIsLogin(false);
    clearToken();
    window.location.reload();
  };
  const onClickRegister = () => {
    history.push('/register');
  };
  const onClickProfile = () => {
    history.push('/profile');
  };
  return (
    <header className='home-header'>
      <div className='home-logo' onClick={onClickLogo}>
        <img src={logo} alt='이미지 없음 ' />
      </div>
      <div className='home-bar-btns'>
        <span
          className='home-bar-btn'
          onClick={isLogin ? onClickProfile : onClickLogin}
        >
          {isLogin ? '프로필' : '로그인'}
        </span>
        <span
          className='home-bar-btn'
          onClick={isLogin ? onClickLogout : onClickRegister}
        >
          {isLogin ? '로그아웃' : '회원가입'}
        </span>
      </div>
    </header>
  );
};

export default Header;
