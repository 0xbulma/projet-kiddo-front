import React from 'react';
import ReactDOM from 'react-dom';
import './back-drop.css';

const BackDrop = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>{ReactDOM.createPortal(<div className='backdrop backdrop-blur-xl fixed' onClick={onClose}></div>, document.getElementById('backdrop-root'))}</>
  );
};

export default BackDrop;
