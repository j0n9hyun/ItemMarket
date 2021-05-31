import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../static/scss/home.scss';
const Loading = () => {
  return (
    <div className='loading-wrapper'>
      <FontAwesomeIcon icon={faSpinner} spin size='4x' />;
    </div>
  );
};

export default Loading;
