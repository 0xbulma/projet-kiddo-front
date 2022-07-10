import ReactDOM from 'react-dom';

const BackDrop = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      {ReactDOM.createPortal(
        <div className='fixed z-40 top-0 left-0 right-0 bottom-0 backdrop-blur-md backdrop-brightness-75' onClick={onClose}></div>,
        document.getElementById('backdrop-root')
      )}
    </>
  );
};

export default BackDrop;
