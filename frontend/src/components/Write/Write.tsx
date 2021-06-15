import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/write.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { createArticle } from '../atoms/marketState';
import { authCheckSelector } from '../atoms/authState';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';

const Write = () => {
  // const [value, setValue] = useState('');
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { name } = useRecoilValue(authCheckSelector);
  const onClickWrite = () => {
    createArticle(name, title, content, 300, 'url');
    history.push('/market');
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    // 'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];
  const onChangeContent = (e: any) => {
    setContent(e);
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
          <input
            type='text'
            placeholder='제목을 입력해주세요'
            onChange={onChangeTitle}
          />
        </div>
        <ReactQuill
          style={{
            height: '600px',
            width: '50%',
            margin: '30px auto 60px',
          }}
          placeholder='내용을 입력해주세요'
          // value={value}
          onChange={(content, delta, source, editor) =>
            onChangeContent(editor.getText())
          }
          modules={modules}
          formats={formats}
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
