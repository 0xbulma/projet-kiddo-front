import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ISearch from '../../../../components/shared/icons/ISearch';
import IProfile from '../../../../components/shared/icons/IProfile';
import INotification from '../../../../components/shared/icons/INotification';
import ICalendar from '../../../../components/shared/icons/ICalendar';
import useAuthContext from '../../../../hooks/useAuthContext';
import ModalBackdrop from '../../../shared/modal/ModalBackdrop';
import ModalRegisterLogin from '../../../shared/modal/ModalRegisterLogin';
import { useLocation } from 'react-router-dom';

import useSearchContext from '../../../../hooks/useSearchContext';

import useEventListener from '../../../../hooks/useEventListener';
import Navbar2Sub from './Navbar2Sub';
import { FaChevronDown, FaTimesCircle } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
import ProfileMenu from './ProfileMenu';
import useDebounce from '../../../../hooks/useDebounce';
import logo from '../../../../assets/images/logo.svg';
import './navbar2.css';

export default function Navbar2() {
  const search = useSearchContext();

  let location = useLocation();

  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isModal, setIsModal] = useState();
  const { isAuth, _id, loggedOut } = useAuthContext();
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState();
  const [goingUp, setGoingUp] = useState(false);
  const [profileIsShown, setProfileIsShown] = useState(false);

  const prevScrollY = useRef(0);
  const navigate = useNavigate();

  const handler = ({ key }) => {
    switch (key) {
      case 'Escape':
        search.setIsSearchOpen();
        break;
      case 'Enter':
        if(search.userInput){
          search.initSearch();
        }
        search.setIsSearchOpen();
        break;
      default:
        return;
    }
  };

  const showSearchInputHandler = () => {
    // if (userInput) {
    //   return;
    // }
    if (isSubOpen) {
      setIsSubOpen(false);
    }
    search.setIsSearchOpen();
  };

  const toggleSubMenu = () => {
    setIsSubOpen(bol => !bol);
  };

  const closeSearchAndSub = () => {
    setIsSubOpen(false);
    search.closeSearch();
    search.clearUserInput();
  };

  const onInputHandler = e => {
    search.setUserInput(e.currentTarget.value);
  };

  const scrollHandler = e => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    if (!showNav) {
      setShowNav(true);
    }
    if (!goingUp && window.scrollY > 10) {
      setShowNav(false);
      setIsSubOpen(false);
      setProfileIsShown(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goingUp, scrollY]);

  useDebounce(
    () => {
      if (!showNav) {
        setShowNav(true);
      }
    },
    800,
    [scrollY]
  );

  const toggleProfile = () => {
    setProfileIsShown(bol => !bol);
  };

  useEventListener('scroll', scrollHandler);
  useEventListener('keydown', handler);

  return (
    <>
      {isModal && (
        <ModalBackdrop
          composant={<ModalRegisterLogin closeModal={() => setIsModal(false)} />}
          open={isModal}
          onClose={() => setIsModal(false)}
        />
      )}

      <div
        className={`navbar2__container ${scrollY > 2 && 'navbar2__container--scrolled'} ${
          !showNav && 'navbar2__container--hidden'
        }`}
      >
        <nav className='navbar2__innercontainer generic-container'>
          <NavLink to='/'>
            <img className='navbar2_logo' src={logo} alt='logo' onClick={closeSearchAndSub} />
          </NavLink>

          {!search.isSearchOpen && (
            <ul className='navbar2__linklist'>
              <li>
                <NavLink className='navbar2__link' to='/kiddo' onClick={closeSearchAndSub}>
                  Découvrir Kiddo
                </NavLink>
              </li>
              <li>
                <div className={`navbar2__link flex items-center gap-2 ${location.pathname.includes('category') && 'active'}`} onClick={toggleSubMenu}>
                  <span>Participer aux activités</span>
                  <FaChevronDown />
                </div>
              </li>
              <li>
                <NavLink className='navbar2__link' to='/404' onClick={closeSearchAndSub}>
                  Organiser une activités
                </NavLink>
              </li>
            </ul>
          )}

          <div className={`navbar2__icongroup ${search.isSearchOpen && 'navbar2__icongroup--grow '}`}>
            {search.isSearchOpen && (
              <div className='navbar2__searchinput-container'>
                <input
                  className='navbar2__searchinput focus:ring-0'
                  type='text'
                  autoFocus
                  placeholder='Trouver une activité...'
                  value={search.userInput}
                  onChange={onInputHandler}
                />
                <ISearch onClick={showSearchInputHandler} className='navbar2__icon--searchinput' />
                <FaTimesCircle onClick={search.closeSearch} className='navbar2__icon--searchinputleft' />
              </div>
            )}
            {!search.isSearchOpen && <ISearch onClick={showSearchInputHandler} className='navbar2__icon' />}

            <ICalendar className='navbar2__icon' onClick={closeSearchAndSub} />
            <INotification className='navbar2__icon' onClick={closeSearchAndSub} />

            {isAuth && (
              <Menu as='div' className='relative'>
                <Menu.Button onClick={toggleProfile} className='flex items-center outline-none'>
                  <IProfile className='navbar2__icon' />
                </Menu.Button>
                <ProfileMenu
                  isShown={profileIsShown}
                  goToProfile={() => {
                    closeSearchAndSub();
                    navigate('/user');
                  }}
                  logOut={() => {
                    closeSearchAndSub();
                    navigate('/');
                    loggedOut(_id);
                  }}
                />
              </Menu>
            )}
            {!isAuth && (
              <IProfile
                className='navbar2__icon'
                onClick={() => {
                  closeSearchAndSub();
                  setIsModal(true);
                }}
              />
            )}
          </div>
        </nav>
      </div>
      {isSubOpen && <Navbar2Sub toggle={isSubOpen} />}
    </>
  );
}
