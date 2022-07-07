import React from 'react';
import { getCategoryColorForTailwind } from '../../../utils/constants/categoryColors';
// Import: assets
import { FaStar } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import icon_arrow from '../../../assets/icons/icon_category_arrow.svg';

const handleFavClick = () => {
  console.log('Handle Fav Click');
};

const CategoryCard = ({ type, name, imageUrl }) => {
  const color = 'bg-' + getCategoryColorForTailwind(type);
  return (
    <>
      <article className='relative shadow-sm shadow-gray-400 rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-green-300 hover:shadow-md hover:shadow-green-300'>
        <div>
          <img src={imageUrl} alt='' className='relative w-full h-64 rounded-t-xl object-fill' />
          <ReactTooltip type='success' effect='solid' place='top' />
          <FaStar
            className='absolute top-0 left-full -ml-12 mt-3 text-white bg-gray-400 bg-opacity-25 w-8 h-8 p-1 rounded-full hover:bg-white hover:text-yellow-300 hover:animate-spin transition-all'
            onClick={() => handleFavClick}
            data-tip='Mettre en favoris'
          />
        </div>
        <div className={`flex font-medium rounded-b-xl py-4 px-3 hover:underline ${color}`}>
          <p className='ml-auto'>Activités {name}</p>
          <img src={icon_arrow} alt='' className='ml-auto' />
        </div>
      </article>
    </>
  );
};

export default CategoryCard;
