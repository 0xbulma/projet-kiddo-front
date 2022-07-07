import React from 'react';
import activityPic from '../../../assets/images/GDN2.jpg';
import './activity-card.css';

import * as dateManager from '../../../utils/DateManager';

// Import: assets
import { FaStar, FaEuroSign, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import icon_arrow from '../../../assets/icons/icon_category_arrow.svg';

import { getCategoryColorForCSS } from '../../../utils/constants/categoryColors';

export default function ActivityCard({ title, category, location, date, price, color }) {
  const categoryColor = getCategoryColorForCSS(category);

  return (
    <>
      <article
        className={`overflow-hidden relative shadow-sm shadow-gray-400 rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-green-300 hover:shadow-md hover:shadow-green-300`}>
        <div className='activity-card__ruban' data-category={category} style={{ '--ruban-color': categoryColor }}>
          <img src={activityPic} alt='' className='relative w-full h-64 rounded-t-xl object-fill' />
          <ReactTooltip type='light' effect='solid' place='top' />
          <FaStar
            className='absolute top-0 left-full -ml-12 mt-3 text-white bg-gray-400 bg-opacity-25 w-8 h-8 p-[6px] rounded-full hover:bg-white hover:text-yellow-300 hover:animate-spin transition-all'
            data-tip='Mettre en favoris'
          />
          <ReactTooltip type='info' effect='solid' place='top' />
          <FaEuroSign
            className='absolute top-0 left-full -ml-24 mt-3 pl-1 text-white bg-gray-400 bg-opacity-25 w-8 h-8 p-[6px] rounded-full hover:bg-white hover:text-blue-400 transition-all'
            data-tip={`Prix adulte ${price.adult}€` + (price.child && `, enfant ${price.child}€`)}
          />
        </div>
        <div className={`flex flex-col rounded-b-xl py-2 px-3`}>
          <div className='flex mb-1'>
            <p className='font-medium mr-auto truncate'>{title}</p>
            <img src={icon_arrow} alt='' className='ml-auto' />
          </div>
          <div className='flex justify-between font-light text-[16px] mx-1'>
            <div className='flex items-center'>
              <FaMapMarkerAlt className='mr-3' />
              <p className='truncate'>
                {location.city} ({location.zip_code.substring(0, 2)})
              </p>
            </div>
            <div className='flex items-center'>
              <FaCalendarAlt className='mr-3' />
              <p>{dateManager.getDate(date)}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
