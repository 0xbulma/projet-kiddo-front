import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';

import NavIcon from './NavIcon';
import { navigationHeader } from '../../../../utils/constants/navigation';

import Logo from '../../../shared/Logo';
import Nav from './Nav';
import { useEffect, useRef, useState } from 'react';
import ISearch from '../../../shared/icons/ISearch';
import ModalBackdrop from '../../../shared/modal/ModalBackdrop';
import ModalRegisterLogin from '../../../shared/modal/ModalRegisterLogin';

// import "../navbar2/navbar2.css";
import { useNavigate } from 'react-router';
import useDebounce from '../../../../hooks/useDebounce';
import useEventListener from '../../../../hooks/useEventListener';
import { FaTimesCircle } from 'react-icons/fa';
import Submenu from './Submenu';

const titleProp = navigationHeader.titleProp;
const navigation = navigationHeader.navigation;
const navIcon = navigationHeader.navIcon;

export default function Navbar() {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isModal, setIsModal] = useState();
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState();
  const [goingUp, setGoingUp] = useState(false);
  const [profileIsShown, setProfileIsShown] = useState(false);

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
    setIsSearchOpen((bol) => !bol);
    setUserInput('');
  };

  const showSubMenu = () => {
    setIsSubOpen((bol) => !bol);
  };
  
  const closeSubMenu = () => {
    setIsSubOpen(false);
  };
  const closeSearchInput = () => {
    setIsSearchOpen(false);
    setUserInput('');
  };

  const onInputHandler = (e) => {
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
    setProfileIsShown((bol) => !bol);
  };

  useEventListener('scroll', scrollHandler);
  useEventListener('keydown', handler);
  
  return (
    <>
      {isModal && (
        <ModalBackdrop composant={<ModalRegisterLogin closeModal={() => setIsModal(false)} />} open={isModal} onClose={() => setIsModal(false)} />
      )}
      
      <section className={`navbar2__container ${scrollY > 2 && 'navbar2__container--scrolled'} ${!showNav && 'navbar2__container--hidden'}`}>
        <div className='navbar2__innercontainer generic-container'>
          <Logo titleProp={titleProp} className='md:w-36 w-28 md:navbar2_logo' />
          <div className='flex flex-row justify-between gap-x-2 md:-my-2 md:-mr-2 md:hidden'>
            <button type="button" className='text-black bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'>
            {
              isSearchOpen ? (
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
              ) : (
                <ISearch onClick={showSearchInputHandler} className='navbar2__icon' />
              )
            }
            </button>
            <Popover.Button className='inline-flex justify-center p-2 text-black bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='w-6 h-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-around">
            <Nav navigation={navigation} isSearchOpen={isSearchOpen} showSubMenu={showSubMenu} />
            <NavIcon 
              navIcon={navIcon} 
              isSearchOpen={isSearchOpen}
              onInputHandler={onInputHandler}
              userInput={userInput}
              showSearchInputHandler={showSearchInputHandler}
              closeSearchInput={closeSearchInput}
              closeSubMenu={closeSubMenu}
              profileIsShown={profileIsShown}
              setIsModal={setIsModal}
              toggleProfile={toggleProfile}
            />
          </div>
        </div>
        {isSubOpen && <Submenu toggle={isSubOpen} item={navigation[1]} />}
      </section>
    </>
  );
}
