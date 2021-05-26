import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import '../../static/scss/home.scss';
const Home = () => {
  const history = useHistory();
  const onClickLogo = () => {
    history.push('/');
  };
  return (
    <>
      <Helmet>
        <title>마켓</title>
      </Helmet>
      <header className='home-header'>
        <div className='home-logo' onClick={onClickLogo}>
          마켓
        </div>
        <div className='home-bar-btns'>
          <span className='home-bar-btn'>로그인</span>
          <span className='home-bar-btn'>회원가입</span>
        </div>
      </header>
      <div className='home-section'>
        <section className='home-section first'>
          <div className='home-first-wrapper'>
            <div className='home-first-title'>프로젝트 소개</div>
            <p className='home-first-description'>
              구하지 청춘의 창공에 미인을 보는 몸이 사막이다. 보이는 광야에서
              원질이 능히 대중을 것이다.
            </p>
          </div>
        </section>
        <section className='home-section second'>
          <div className='home-first-wrapper'>
            <div className='home-first-title'>주요 기능</div>
            <p className='home-first-description'>
              내 별 잠, 쓸쓸함과 까닭입니다. 토끼, 까닭이요, 언덕 내일 어머니,
              자랑처럼 별 이름자 헤일 있습니다. 아스라히 까닭이요, 너무나 다하지
              노루, 흙으로 듯합니다.
            </p>
          </div>
        </section>
        <section className='home-section third'>
          <div className='home-first-wrapper'>
            <div className='home-first-title'>사용 기술</div>
            <p className='home-first-description'>
              위에 오면 멀리 별 하나 추억과 때 묻힌 언덕 듯합니다. 소학교 마리아
              아이들의 새겨지는 봅니다.
              <img
                src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png'
                alt=''
              />
              <img
                src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png'
                alt=''
              />
              <img
                src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593062577/noticon/uts4vbntu8ejsaxdtj1l.png'
                alt=''
              />
              <img
                src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777755/noticon/yfmwxv8nhnr5aqaxhxpg.png'
                alt=''
              />
            </p>
          </div>
        </section>
        <section className='home-section fourth'>
          <div className='home-first-wrapper'>
            <div className='home-first-title'>문의</div>
            <p className='home-first-description'>
              하나에 별 이제 우는 있습니다. 어머니, 파란 별 내린 있습니다.
              아스라히 이런 하나에 아이들의 내 위에 지나고 버리었습니다.
            </p>
          </div>
        </section>
      </div>
      <footer className='home-footer'>
        ⓒ 2021. j0n9hyun all rights reserved.
      </footer>
    </>
  );
};

export default Home;
