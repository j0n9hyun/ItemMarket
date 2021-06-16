import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WriteView = ({
  modules,
  formats,
  onChangeTitle,
  onChangeContent,
  onClickWrite,
  quillRef,
}: any) => {
  return (
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
        onChange={(content, delta, source, editor) =>
          onChangeContent(editor.getText())
        }
        modules={modules}
        formats={formats}
        ref={quillRef}
      />
      <div className='write-submit-wrapper'>
        <button className='write-submit-btn' onClick={onClickWrite}>
          작성하기
        </button>
        <button className='write-submit-btn'>돌아가기</button>
      </div>
    </div>
  );
};

export default WriteView;
