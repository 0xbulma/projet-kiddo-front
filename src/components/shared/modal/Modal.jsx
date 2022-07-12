import ReactDOM from 'react-dom';
import { FaTimesCircle } from 'react-icons/fa';

const Modal = ({ open, onClose, composant }) => {
  if (!open) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <section className='z-50 fixed top-0 flex justify-center items-center w-full h-full pointer-events-none'>
            <article className='flex flex-col items-center w-auto h-auto px-20 pb-12 bg-kiddoGray shadow-md shadow-kiddoShadow pointer-events-auto rounded-lg'>
              <button
                className='bg-white rounded-full self-end  mt-3 mb-5 -mr-16 hover:bg-gray-800 hover:text-white transition-all'
                onClick={onClose}>
                <FaTimesCircle />
              </button>
              <article className='mt-8'>{composant}</article>
            </article>
          </section>
        </>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
