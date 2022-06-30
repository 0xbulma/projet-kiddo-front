// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import './_carousel.css';

export default function Carousel(props) {
  const { images } = props;

  const [imgLength] = useState(images.length);

  const [imgMainIndex, setImgMainIndex] = useState(imgLength % 2 === 0 ? imgLength / 2 : 0);

  const [imgIndex, setImgIndex] = useState({
    first: imgMainIndex - 1 >= 0 ? imgMainIndex - 1 : -1,
    last: imgMainIndex + 1 < imgLength ? imgMainIndex + 1 : -1,
  });

  useEffect(() => {
    setImgIndex({
      first: imgMainIndex - 1 >= 0 ? imgMainIndex - 1 : imgLength - 1,
      last: imgMainIndex + 1 < imgLength ? imgMainIndex + 1 : 0,
    });
  }, [imgMainIndex, imgLength]);

  const imgAnchor = useRef();

  const changeImgIndex = (next) => {
    let actualImgIndex = imgMainIndex;
    if (next) {
      if (actualImgIndex++ >= images.length) {
        setImgMainIndex(1);
        console.log(actualImgIndex, '| Case 1');
      } else {
        setImgMainIndex(actualImgIndex);
        console.log(actualImgIndex, '| Case 2');
      }
    } else {
      if (actualImgIndex-- < 0) {
        setImgMainIndex(images.length - 1);
        console.log(actualImgIndex, '| Case 3');
      } else {
        setImgMainIndex(actualImgIndex);
        console.log(actualImgIndex, '| Case 4');
      }
    }
  };

  return (
    <div>
      <article className='flex justify-center items-center'>
        {imgIndex.first > -1 && (
          <div className='carousel__firstImg' onClick={() => changeImgIndex(false)}>
            {/* <FontAwesomeIcon icon={faBackward} className='carousel__firstImg__icon' /> */}
            <img ref={imgAnchor} alt='' src={images[imgIndex.first]} className='carousel__baseImg' />
          </div>
        )}
        <img ref={imgAnchor} alt='' src={images[imgMainIndex]} className='carousel__mainImg' />
        {imgIndex.last > -1 && (
          <div className='carousel__lastImg' onClick={() => changeImgIndex(true)}>
            {/* <FontAwesomeIcon icon={faForward} className='carousel__LastImg__icon' /> */}
            <img ref={imgAnchor} alt='' src={images[imgIndex.last]} className='carousel__baseImg' />
          </div>
        )}
      </article>
    </div>
  );
}
