import { useHistory } from 'react-router';

const Section = () => {
  const history = useHistory();
  const onClickStart = () => {
    history.push('/market');
  };
  return (
    <div className='home-section'>
      <section className='home-section first'>
        <div className='home-wrapper'>
          <div className='home-title'>프로젝트 소개</div>
          <p className='home-description'>
            구하지 청춘의 창공에 미인을 보는 몸이 사막이다. 보이는 광야에서
            원질이 능히 대중을 것이다.
          </p>
          <div className='start-btn' onClick={onClickStart}>
            <span className='start-btn-text'>시작하기</span>
          </div>
        </div>
      </section>
      <section className='home-section second'>
        <div className='home-wrapper'>
          <div className='home-title'>주요 기능</div>
          <p className='home-description'>
            내 별 잠, 쓸쓸함과 까닭입니다. 토끼, 까닭이요, 언덕 내일 어머니,
            자랑처럼 별 이름자 헤일 있습니다. 아스라히 까닭이요, 너무나 다하지
            노루, 흙으로 듯합니다.
          </p>
        </div>
      </section>
      <section className='home-section third'>
        <div className='home-wrapper'>
          <div className='home-title'>사용 기술</div>
          <p className='home-description'>
            위에 오면 멀리 별 하나 추억과 때 묻힌 언덕 듯합니다. 소학교 마리아
            아이들의 새겨지는 봅니다.
          </p>
        </div>
        <div className='home-stacks'>
          <div className='home-stack'>
            <img
              src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png'
              alt=''
            />
            <div className='home-stack-description'>
              <div className='home-stack-title'>Front-End</div>
              <div>
                <li>React v17</li>
                <li>React-router</li>
                <li>Recoil</li>
                <li>Axios</li>
                <li>Typescript</li>
                <li>Scss</li>
              </div>
            </div>
            <img
              src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png'
              alt=''
            />
            <div className='home-stack-description'>
              <div className='home-stack-title'>Back-End</div>
              <div>
                <li>Node v14</li>
                <li>Express</li>
                <li>JWT Token</li>
                <li>Swagger</li>
                <li>TypeORM</li>
                <li>Socket.io</li>
              </div>
            </div>
          </div>
          <div className='home-stack'>
            <img
              src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593062577/noticon/uts4vbntu8ejsaxdtj1l.png'
              alt=''
            />
            <div className='home-stack-description'>
              <div className='home-stack-title'>Deploy</div>
              <div>
                <li>GCP</li>
                <li>LetsEncrypt(SSL)</li>
                <li>Docker</li>
              </div>
            </div>

            <img
              src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913419/noticon/xf9bevlrgugi7xj6xkhp.png'
              alt=''
            />
            <div className='home-stack-description'>
              <div className='home-stack-title'>Work</div>
              <div>
                <li>Github</li>
                <li>Notion</li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section fourth'>
        <div className='home-wrapper'>
          <div className='home-title'>문의</div>
          <p className='home-description'>
            하나에 별 이제 우는 있습니다. 어머니, 파란 별 내린 있습니다.
            아스라히 이런 하나에 아이들의 내 위에 지나고 버리었습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section;
