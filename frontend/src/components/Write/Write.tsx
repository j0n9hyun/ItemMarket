import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/write.scss';
import { useRef, useState } from 'react';
import { createArticle } from '../atoms/marketState';
import { authCheckSelector } from '../atoms/authState';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import WriteView from './WriteView';

const Write = () => {
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
  const quillRef = useRef<any>(null);

  const onChangeContent = (e: any) => {
    setContent(e);
  };
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 글작성</title>
      </Helmet>
      <Header />
      <WriteView
        onChangeContent={onChangeContent}
        onChangeTitle={onChangeTitle}
        onClickWrite={onClickWrite}
        quillRef={quillRef}
      />
      <Footer />
    </>
  );
};

export default Write;
