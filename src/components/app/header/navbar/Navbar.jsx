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

import useDebounce from '../../../../hooks/useDebounce';
import useEventListener from '../../../../hooks/useEventListener';
import { FaTimesCircle } from 'react-icons/fa';
import Submenu from './Submenu';
import useSearchContext from '../../../../hooks/useSearchContext';

import "../navbar2/navbar2.css";

const titleProp = navigationHeader.titleProp;
const navigation = navigationHeader.navigation;
const navIcon = navigationHeader.navIcon;

export default function Navbar() {
  const search = useSearchContext();

  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isModal, setIsModal] = useState();
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState();
  const [goingUp, setGoingUp] = useState(false);
  const [profileIsShown, setProfileIsShown] = useState(false);

  const prevScrollY = useRef(0);

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
        <ModalBackdrop composant={<ModalRegisterLogin closeModal={() => setIsModal(false)} />} open={isModal} onClose={() => setIsModal(false)} />
      )}
      
      <section 
        className={`py-[4px] navbar2__container ${scrollY > 2 && 'navbar2__container--scrolled'} ${
          !showNav && 'navbar2__container--hidden'
        }`}>
        <nav className='navbar2__innercontainer generic-container'>
          <Logo titleProp={titleProp} className='w-28 navbar2_logo' />
          
          <div className='flex flex-row justify-between gap-x-2 md:-my-2 md:-mr-2 md:hidden'>
            <button type="button" className='text-black bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'>
            {
              search.isSearchOpen ? (
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
          
          
            
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Nav 
              navigation={navigation} 
              isSearchOpen={search.isSearchOpen} 
              closeSearchAndSub={closeSearchAndSub}
              toggleSubMenu={toggleSubMenu}
            />
          
            <NavIcon 
              navIcon={navIcon} 
              isSearchOpen={search.isSearchOpen}
              onInputHandler={onInputHandler}
              userInput={search.userInput}
              showSearchInputHandler={showSearchInputHandler}
              closeSearch={search.closeSearch}
              closeSearchAndSub={closeSearchAndSub}
              profileIsShown={profileIsShown}
              setIsModal={setIsModal}
              toggleProfile={toggleProfile}
            />
            
          </div>
        </nav>
      </section>
      {isSubOpen && <Submenu toggle={isSubOpen} item={navigation[1]} />}
    </>
  );
}
