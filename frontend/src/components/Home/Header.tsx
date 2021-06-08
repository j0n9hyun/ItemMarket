import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import logo from '../../static/img/jjong.png';
import { loggedState } from '../atoms/authState';
import { logoutState } from '../atoms/marketState';
const Header = () => {
  const history = useHistory();
  const [logged, setLogged] = useRecoilState(loggedState);
  const onClickLogo = () => {
    history.push('/');
  };
  const onClickLogin = () => {
    history.push('/login');
  };
  const onClickLogout = () => {
    setLogged(false);
    logoutState();
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
          onClick={logged ? onClickProfile : onClickLogin}
        >
          {logged ? '프로필' : '로그인'}
        </span>
        <span
          className='home-bar-btn'
          onClick={logged ? onClickLogout : onClickRegister}
        >
          {logged ? '로그아웃' : '회원가입'}
        </span>
      </div>
    </header>
  );
};

export default Header;
