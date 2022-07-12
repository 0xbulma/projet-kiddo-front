import React from 'react';
import { getCategoryColorForCSS } from '../../../utils/constants/categoryColors';
// Import: assets
import { FaStar } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import icon_arrow from '../../../assets/icons/icon_category_arrow.svg';

const handleFavClick = () => {
  alert('Mise en favoris non raccordée au Back');
};

const CategoryCard = ({ type, name, imageUrl }) => {
  const categoryColor = getCategoryColorForCSS(type);

  return (
    <>
      <article
        className='category-card relative shadow-sm shadow-kiddoShadow rounded-xl cursor-pointer transition-all hover:ring-4'
        style={{ '--ruban-color': categoryColor }}>
        <div>
          <img src={imageUrl} alt='' className='relative w-full h-64 rounded-t-xl object-fill' />
          <ReactTooltip type='success' effect='solid' place='top' />
          <FaStar
            className='absolute top-0 left-full -ml-12 mt-3 text-white bg-gray-400 bg-opacity-25 w-8 h-8 p-1 rounded-full hover:bg-white hover:text-yellow-300 hover:animate-spin transition-all'
            onClick={() => handleFavClick}
            data-tip='Mettre en favoris'
          />
        </div>
        <div className='category-card-ruban flex font-medium rounded-b-xl py-4 px-3 hover:underline' style={{ '--ruban-color': categoryColor }}>
          <p className='ml-auto'>Activités {name}</p>
          <img src={icon_arrow} alt='' className='ml-auto' />
        </div>
      </article>
    </>
  );
};

export default CategoryCard;
