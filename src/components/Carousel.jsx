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
        <div className='flex justify-left relative'>
          <div className='flex flex-shrink-0 flex-nowrap'>
            {images.map((img, index) => {
              const indexCalc = index + imgIndex;
              const finalIndex = indexCalc % imgsLength;
              return (
                <div key={index} className='w-full px-2'>
                  <img src={images[finalIndex]} alt='...' className='shadow rounded max-w-full h-auto align-middle border-none' />
                </div>
              );
            })}
          </div>

          <FontAwesomeIcon
            icon={faBackward}
            className='absolute left-10 top-2/4 text-xl text-white bg-gray-500 pl-2 pr-3 py-2 rounded-full border border-gray-400 hover:scale-105 cursor-pointer transition-all'
            onClick={() => changeImgIndex(false)}
          />
          <FontAwesomeIcon
            icon={faForward}
            className='absolute right-10 top-2/4 text-xl  text-white bg-gray-500 pl-3 pr-2 py-2 rounded-full border border-gray-400 hover:scale-105 cursor-pointer transition-all'
            onClick={() => changeImgIndex(true)}
          />
        </div>
      </article>
    </div>
  );
}
