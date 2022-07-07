import React from 'react';
import ReactSlider from 'react-slider';

import './filterbox.css';

export default function Filterbox({
  className,
  maxDist,
  setMaxDist,
  minChildAge,
  setMinChildAge,
  maxChildAge,
  setMaxChildAge,
  isGeoLoc,
}) {
  return (
    <div className={`filterbox__container ${className}`}>
      {isGeoLoc && (
        <div className='fitlerbox__group'>
          <label className='filterbox__label'>Distance maximale</label>
          <ReactSlider
            value={maxDist / 1000}
            onAfterChange={(value, index) => {
              setMaxDist(value * 1000);
            }}
            className='filterbox__horizontal-slider'
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
        <label className='filterbox__label'>Age d'enfants</label>
        <ReactSlider
          value={[minChildAge, maxChildAge]}
          onAfterChange={(value, index) => {
            console.log(value[1]);
            setMinChildAge(value[0]);
            setMaxChildAge(value[1]);
          }}
          className='filterbox__horizontal-slider'
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
