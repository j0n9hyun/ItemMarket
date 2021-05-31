import { useHistory } from 'react-router';

const Footer = () => {
  const history = useHistory();
  const onClickIntroduce = () => {
    history.push('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const onClickSource = () => {
    window.open('https://github.com/j0n9hyun/ItemMarket', '_blank');
  };
  return (
    <footer className='home-footer-wrapper'>
      <ul className='home-footer-ul'>
        <li onClick={onClickIntroduce}>소개</li>
        <li onClick={onClickSource}>소스</li>
        <li>문의</li>
      </ul>
      <div className='home-footer-copyright'>
        ⓒ 2021. j0n9hyun all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
