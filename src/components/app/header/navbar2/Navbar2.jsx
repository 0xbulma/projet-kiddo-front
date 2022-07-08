import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ISearch from '../../../../components/shared/icons/ISearch';
import IProfile from '../../../../components/shared/icons/IProfile';
import INotification from '../../../../components/shared/icons/INotification';
import ICalendar from '../../../../components/shared/icons/ICalendar';
import useAuthContext from '../../../../hooks/useAuthContext';
import ModalBackdrop from '../../../shared/modal/ModalBackdrop';
import Register from '../../register/Register';
import useEventListener from '../../../../hooks/useEventListener';
import Navbar2Sub from './Navbar2Sub';
import { FaChevronDown, FaTimesCircle } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
import ProfileMenu from './ProfileMenu';
import useDebounce from '../../../../hooks/useDebounce';
import logo from '../../../../assets/images/logo.svg';
import './navbar2.css';

export default function Navbar2() {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isModal, setIsModal] = useState();
  const { isAuth, loggedOut } = useAuthContext();
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState();
  const [goingUp, setGoingUp] = useState(false);
  const [profileIsShown, setProfileIsShown] = useState(false)

  const prevScrollY = useRef(0);

  const navigate = useNavigate();
  const handler = ({ key }) => {
    switch (key) {
      case 'Escape':
        setIsSearchOpen(false);
        break;
      case 'Enter':
        initSearch();
        showSearchInputHandler();
        break;
      default:
        return;
    }
  };

  const showSearchInputHandler = () => {
    if (userInput) {
      return;
    }
    if (isSubOpen) {
      setIsSubOpen(false);
    }
    setIsSearchOpen(bol => !bol);
    setUserInput('');
  };

  const showSubMenu = () => {
    setIsSubOpen(bol => !bol);
  };
  const closeSubMenu = () => {
    setIsSubOpen(false);
  };
  const closeSearchInput = () => {
    setIsSearchOpen(false);
    setUserInput('');
  };

  const onInputHandler = e => {
    setUserInput(e.currentTarget.value);
  };

  const initSearch = () => {
    if (userInput) {
      navigate('/search/' + userInput);
    }
  };

  useDebounce(
    () => {
      initSearch();
    },
    1000,
    [userInput]
  );

  const scrollHandler = (e) => {
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

  useEffect(()=>{
    if(!showNav){
      setShowNav(true);
    }
    if(!goingUp && window.scrollY > 10){
      setShowNav(false);
      setIsSubOpen(false);
      setProfileIsShown(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[goingUp, scrollY])

  useDebounce(() => {
    if(!showNav){
      setShowNav(true);
    }
  }, 800, [scrollY]);


  const toggleProfile = () => {
    setProfileIsShown(bol => !bol);
  }

  useEventListener('scroll', scrollHandler);
  useEventListener('keydown', handler);

  return (
    <>
      {isModal && <ModalBackdrop composant={<Register />} open={isModal} onClose={() => setIsModal(false)} />}

      <div className={`navbar2__container ${scrollY > 2 && 'navbar2__container--scrolled'} ${!showNav && 'navbar2__container--hidden'}`}>
        <nav className='navbar2__innercontainer generic-container'>
          <NavLink to='/'>
            <img className='navbar2_logo' src={logo} alt='logo' onClick={closeSubMenu} />
          </NavLink>

          {!isSearchOpen && (
            <ul className='navbar2__linklist'>
              <li>
                <NavLink className='navbar2__link' to='/kiddo' onClick={closeSubMenu}>
                  Découvrir Kiddo
                </NavLink>
              </li>
              <li>
                <div className='navbar2__link flex items-center gap-2' onClick={showSubMenu}>
                  <span>Participer aux activités</span>
                  <FaChevronDown />
                </div>
              </li>
              <li>
                <NavLink className='navbar2__link' to='/404' onClick={closeSubMenu}>
                  Organiser une activités
                </NavLink>
              </li>
            </ul>
          )}

          <div className={`navbar2__icongroup ${isSearchOpen && 'navbar2__icongroup--grow '}`}>
            {isSearchOpen && (
              <div className='navbar2__searchinput-container'>
                <input
                  className='navbar2__searchinput focus:ring-0'
                  type='text'
                  autoFocus
                  placeholder='Trouver une activité...'
                  value={userInput}
                  onChange={onInputHandler}
                />
                <ISearch onClick={showSearchInputHandler} className='navbar2__icon--searchinput' />
                <FaTimesCircle onClick={closeSearchInput} className='navbar2__icon--searchinputleft' />
              </div>
            )}
            {!isSearchOpen && <ISearch onClick={showSearchInputHandler} className='navbar2__icon' />}

            <ICalendar className='navbar2__icon' />
            <INotification className='navbar2__icon' />

            {isAuth && (
              <Menu as='div' className='relative'>
                <Menu.Button onClick={toggleProfile} className='flex items-center outline-none'>
                  <IProfile className='navbar2__icon' />
                </Menu.Button>
                <ProfileMenu isShown={profileIsShown}
                  goToProfile={() => {
                    closeSubMenu();
                    closeSearchInput();
                    navigate('/user');
                  }}
                  logOut={() => {
                    closeSubMenu();
                    closeSearchInput();
                    navigate('/');
                    loggedOut();
                  }}
                />
                
              </Menu>
            )}
            {!isAuth && <IProfile className='navbar2__icon' onClick={() => setIsModal(true)} />}
          </div>
        </nav>
        {isSubOpen && <Navbar2Sub toggle={isSubOpen}/>}
      </div>
    </>
  );
}
