import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import ISearch from '../../../../components/shared/icons/ISearch';
import IProfile from '../../../../components/shared/icons/IProfile';
import INotification from '../../../../components/shared/icons/INotification';
import ICalendar from '../../../../components/shared/icons/ICalendar';
import useAuthContext from '../../../../hooks/useAuthContext';
import ModalBackdrop from '../../../shared/modal/ModalBackdrop';
import Register from '../../register/Register';

import useDebounce from '../../../../hooks/useDebounce';

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
  const [userInput, setUserInput] = useState('');
  const [isModal, setIsModal] = useState();
  const { isAuth } = useAuthContext();

  const navigate = useNavigate();

  const showSearchInputHandler = () => {
    setIsSearchOpen((bol) => !bol);
  };

  const showSubMenu = () => {
    setIsSubOpen((bol) => !bol);
  };

  const onInputHandler = (e) => {
    setUserInput(e.currentTarget.value);
  };

  // const sendSearchQuery = () => {

  // }

  const profileClickHandler = () => {
    if (isAuth) {
      navigate('/user');
    } else {
      setIsModal(true);
    }
  };

  useDebounce(
    () => {
      navigate('/search/' + userInput);
    },
    1000,
    [userInput]
  );
  const onKeyDownHandler = () => {};

  return (
    <div className='navbar2__container'>
      {isModal && <ModalBackdrop composant={<Register />} open={isModal} onClose={() => setIsModal(false)} />}
      <nav className='navbar2__innercontainer'>
        <Link to='/'>
          <img className='navbar2_logo' src={logo} alt='logo' />
        </Link>

        {!isSearchOpen && (
          <ul className='navbar2__linklist'>
            <li>
              <Link className='navbar2__link' to='kiddo'>
                Découvrir Kiddo
              </Link>
            </li>
            <li>
              <div className='navbar2__link' onClick={showSubMenu}>
                Participer aux activités
              </div>
            </li>
            <li>
              <Link className='navbar2__link' to='/'>
                Organiser une activités
              </Link>
            </li>
          </ul>
        )}

        <div className='navbar2__icongroup'>
          {isSearchOpen && (
            <div className='navbar2__searchinput-container'>
              <input
                className='navbar2__searchinput focus:ring-0'
                type='text'
                autoFocus
                value={userInput}
                onChange={onInputHandler}
                onKeyDown={onKeyDownHandler}
              />
              <ISearch onClick={showSearchInputHandler} className='navbar2__icon--searchinput' />
            </div>
          )}
          {!isSearchOpen && <ISearch onClick={showSearchInputHandler} className='navbar2__icon' />}

          <ICalendar className='navbar2__icon' />
          <INotification className='navbar2__icon' />
          <IProfile className='navbar2__icon' onClick={profileClickHandler} />
        </div>
      </nav>
      {isSubOpen && <Navbar2Sub />}
    </div>
  );
}
