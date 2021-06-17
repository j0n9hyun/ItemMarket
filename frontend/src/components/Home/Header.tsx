import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { clearToken } from '../../db/token';
import logo from '../../static/img/jjong.png';
import { loggedState, logoutSubmitState } from '../atoms/authState';
const Header = () => {
  const history = useHistory();
  const [isLogin] = useRecoilState(loggedState);
  const onClickLogo = () => {
    history.push('/');
  };
  const onClickLogin = () => {
    history.push('/login');
  };
  const onClickLogout = () => {
    logoutSubmitState();
    window.location.reload();
  };
  const onClickRegister = () => {
    history.push('/register');
  };
  const onClickProfile = () => {
    history.push('/profile');
  };
  const onClickWrite = () => {
    history.push('/write');
  };
  return (
    <header className='home-header'>
      <div className='home-logo' onClick={onClickLogo}>
        <img src={logo} alt='이미지 없음 ' />
      </div>
      <div className='home-bar-btns'>
        <span
          className='home-bar-btn'
          onClick={isLogin ? onClickWrite : onClickLogin}
        >
          {isLogin ? '글쓰기' : null}
        </span>
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
