import React from 'react';
import { useState } from 'react';
import useToggle from '../../hooks/useToggle';
const Etiquette = ({ name, backgroundColor }) => {
  const [isActive, toggleActive] = useToggle(false);

  backgroundColor = isActive ? backgroundColor : '#e4e3e3';
  return (
    <>
      <div
        onClick={toggleActive}
        style={{ backgroundColor: backgroundColor }}
        className="etiquette border-2 rounded-md p-4 select-none transition-all"
      >
        Activités {name}
      </div>
    </>
  );
};

export default Etiquette;
