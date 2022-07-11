import React from 'react';
import ReactSlider from 'react-slider';

import './filterbox.css';

export default function Filterbox({ className, maxDist, setMaxDist, minChildAge, setMinChildAge, maxChildAge, setMaxChildAge, isGeoLoc }) {
  return (
    <div className={`${className} rounded-lg shadow-md shadow-kiddoShadow z-10 `}>
      {isGeoLoc && (
        <div className='fitlerbox__group mb-5 py-3'>
          <label className='filterbox__label underline'>Distance maximale</label>
          <ReactSlider
            value={maxDist / 1000}
            onAfterChange={(value, index) => {
              setMaxDist(value * 1000);
            }}
            className='filterbox__horizontal-slider mt-2'
            thumbClassName='filterbox__thumb'
            trackClassName='filterbox__slider-track--dist'
            markClassName='filterbox__mark'
            min={1}
            max={200}
            renderThumb={(props, state) => (
              <div {...props}>
                <div className='thumb__pin'></div>
                <div className='thumb__tag'>{`${state.valueNow} km`}</div>
              </div>
            )}
          />
        </div>
      )}

      <div className='fitlerbox__group'>
        <label className='filterbox__label underline'>Age d'enfants</label>
        <ReactSlider
          value={[minChildAge, maxChildAge]}
          onAfterChange={(value, index) => {
            setMinChildAge(value[0]);
            setMaxChildAge(value[1]);
          }}
          className='filterbox__horizontal-slider  mt-2'
          thumbClassName='filterbox__thumb'
          trackClassName='filterbox__slider-track'
          markClassName='filterbox__mark'
          min={0}
          max={12}
          renderThumb={(props, state) => (
            <div {...props}>
              <div className='thumb__pin'></div>
              <div className='thumb__tag'>{`${state.valueNow} ans`}</div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
