import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ISearch from '../../../../components/shared/icons/ISearch';
import IProfile from '../../../../components/shared/icons/IProfile';
import INotification from '../../../../components/shared/icons/INotification';
import ICalendar from '../../../../components/shared/icons/ICalendar';

import logo from '../../../../assets/images/logo.svg';
import './navbar2.css';

function Navbar2Sub() {
  return (
    <div className='navbar2sub__container'>
      <nav className='navbar2sub__innercontainer'>
        <ul className='navbar2sub__linklist'>
          <li>
            <NavLink className='navbar2sub__link' to='/category/culture'>
              Activités culturelles
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/manuel'>
              Activités manuelles
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/sport'>
              Activités sportives
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/art'>
              Activités artistiques
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/eveil'>
              Activités d'éveil corporel
            </NavLink>
          </li>
          <li>
            <NavLink className='navbar2sub__link' to='/category/autres'>
              Activités autres
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Navbar2() {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showSearchInputHandler = () => {
    setIsSearchOpen(bol => !bol);
  };

  const showSubMenu = () => {
    setIsSubOpen(bol => !bol);
  };

  return (
    <div className='navbar2__container'>
      <nav className='navbar2__innercontainer'>
        <img className='navbar2_logo' src={logo} alt='logo' />


        {!isSearchOpen && (<ul className='navbar2__linklist'>
          <li>
            <Link className='navbar2__link' to='kiddo'>
              Découvrir Kiddo
            </Link>
          </li>
          <li>
            <div
              className='navbar2__link'
              onClick={showSubMenu}
            >
              Participer aux activités
            </div>
          </li>
          <li>
            <Link className='navbar2__link' to='/'>
              Organiser une activités
            </Link>
          </li>
        </ul>)}

 
        
        <div className='navbar2__icongroup'>
        {isSearchOpen && (
        <div className='navbar2__searchinput-container' >

           <input className='navbar2__searchinput focus:ring-0' type="text"/>
          <ISearch onClick={showSearchInputHandler} className='navbar2__icon--searchinput'/>
        </div>
        )}
        {!isSearchOpen && <ISearch onClick={showSearchInputHandler} className='navbar2__icon'/>}
          
        <ICalendar className='navbar2__icon'/>
        <INotification className='navbar2__icon'/>
        <IProfile className='navbar2__icon'/>
       
        </div>
      </nav>
      {isSubOpen && <Navbar2Sub />}
    </div>
  );
}
