import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Carousel(props) {
  const { images } = props;
  const imgsLength = images.length;

  const [imgIndex, setimgIndex] = useState(0);

  const changeImgIndex = (next) => {
    let finalExtraIndex = imgIndex;
    if (next) {
      if (++finalExtraIndex >= imgsLength) setimgIndex(0);
      else setimgIndex(finalExtraIndex);
    } else {
      if (--finalExtraIndex < 0) setimgIndex(imgsLength);
      else setimgIndex(finalExtraIndex);
    }
  };

  return (
    <div>
      <article>
        <div className='flex justify-left relative overflow-hidden'>
          <div className='flex flex-shrink-0 flex-nowrap '>
            {images.map((img, index) => {
              const indexCalc = index + imgIndex;
              const finalIndex = indexCalc % imgsLength;
              return (
                <div key={index} className='w-full px-0 md:px-2'>
                  <img
                    src={images[finalIndex]}
                    alt='...'
                    className='shadow rounded w-screen lg:w-full lg:max-w-screen h-auto align-middle border-none'
                  />
                </div>
              );
            })}
          </div>

          <FontAwesomeIcon
            icon={faBackward}
            className='absolute left-5 top-2/4 text-xl text-kiddoGray bg-kiddoPurple pl-2 pr-3 py-2 rounded-full shadow-sm shadow-kiddoShadow hover:text-white hover:scale-105 cursor-pointer transition-all'
            onClick={() => changeImgIndex(false)}
          />
          <FontAwesomeIcon
            icon={faForward}
            className='absolute right-5 top-2/4 text-xl  text-kiddoGray bg-kiddoSalmon pl-3 pr-2 py-2 rounded-full shadow-sm shadow-kiddoShadow hover:text-white hover:scale-105 cursor-pointer transition-all'
            onClick={() => changeImgIndex(true)}
          />
        </div>
      </article>
    </div>
  );
}
