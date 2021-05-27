import React from 'react';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const onClickLogo = () => {
    history.push('/');
  };
  return (
    <header className='home-header'>
      <div className='home-logo' onClick={onClickLogo}>
        쫑마켓
      </div>
      <div className='home-bar-btns'>
        <span className='home-bar-btn'>로그인</span>
        <span className='home-bar-btn'>회원가입</span>
      </div>
    </header>
  );
};

export default Header;
