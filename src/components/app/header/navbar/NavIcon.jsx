import { Menu } from '@headlessui/react';
import { Fragment } from 'react'
import { FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import useAuthContext from '../../../../hooks/useAuthContext';
import ISearch from '../../../shared/icons/ISearch';
import ProfileMenu from './ProfileMenu';

// const isLoggedIn = true;

export default function NavIcon({ 
  navIcon, isSearchOpen, closeSearchInput, closeSubMenu, profileIsShown, setIsModal, onInputHandler, showSearchInputHandler, userInput, toggleProfile
}) {
  
  const { isAuth, _id, loggedOut } = useAuthContext();
  const navigate = useNavigate();
  
  return (
    <div className={`navbar2__icongroup ${isSearchOpen && 'navbar2__icongroup--grow '}`}>
      {
        navIcon.map((item, index) => {
          return (
            <Fragment key={index}>
              {
                item === navIcon[3] ? (
                  <>
                    {
                      isAuth ? (
                        <Menu as="div" className="relative">
                          <Menu.Button onClick={toggleProfile} className="flex items-center outline-none">
                            <item.icon className="navbar2__icon" />
                          </Menu.Button>
                          <ProfileMenu
                            isShown={profileIsShown}
                            goToProfile={() => {
                              closeSubMenu();
                              closeSearchInput();
                              navigate('/user');
                            }}
                            logOut={() => {
                              closeSubMenu();
                              closeSearchInput();
                              navigate('/');
                              loggedOut(_id);
                            }}
                          />
                        </Menu>
                      ) : (
                        <item.icon className="navbar2__icon" onClick={() => setIsModal(true)} />
                      )
                    }
                  </>
                ) : 
                item === navIcon[0] ? (
                  <>
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
                          <item.icon onClick={showSearchInputHandler} className='navbar2__icon--searchinput' />
                          <FaTimesCircle onClick={closeSearchInput} className='navbar2__icon--searchinputleft' />
                        </div>
                      ) : (
                        <ISearch onClick={showSearchInputHandler} className='navbar2__icon' />
                      )
                    }
                  </>
                ) 
                : (
                  <a key={index} href={item.href} className="nav__icon-link">
                    <p className='sr-only'>{item.name}</p>
                    <item.icon className="navbar2__icon" />
                  </a>
                )
              }
            </Fragment>
          )
        })
      }
    </div>
  )
}