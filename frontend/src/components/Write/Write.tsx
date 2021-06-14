import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/write.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios';

const Write = () => {
  const [value, setValue] = useState('');
  const onClickWrite = () => {
    console.log(value);
    axios.get(`${process.env.REACT_APP_SERVER_IP}/market`);
  };
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 글작성</title>
      </Helmet>
      <Header />
      <div className='write-wrapper'>
        <div className='write-title'>글 작성하기</div>
        <div className='write-title-input'>
          <input type='text' placeholder='제목을 입력해주세요' />
        </div>
        <ReactQuill
          style={{
            height: '600px',
            width: '50%',
            margin: '30px auto 60px',
          }}
          theme='snow'
          value={value}
          onChange={setValue}
        />
        <div className='write-submit-wrapper'>
          <button className='write-submit-btn' onClick={onClickWrite}>
            작성하기
          </button>
          <button className='write-submit-btn'>돌아가기</button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Write;
