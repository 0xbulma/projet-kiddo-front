import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';
import Search from './Search';

export default function NavIcon({ 
  navIcon, isSearchOpen, closeSearch, closeSearchAndSub, profileIsShown, setIsModal, onInputHandler, showSearchInputHandler, userInput, toggleProfile
}) {
  
  
  
  return (
    <div className={`navbar2__icongroup ${isSearchOpen && 'navbar2__icongroup--grow '}`}>
      {navIcon.map((item, index) => {
        return (
          <Fragment key={index}>
            {item === navIcon[3] ? (
              <>
                {/* <Profile 
                  item={item}
                  toggleProfile={toggleProfile}
                  profileIsShown={profileIsShown}
                  closeSearchAndSub={closeSearchAndSub}
                  setIsModal={setIsModal}
                /> */}
              </>
              
            ) : item === navIcon[0] ? (
              <>
                {/* <Search 
                  item={item}
                  isSearchOpen={isSearchOpen}
                  closeSearch={closeSearch}
                  onInputHandler={onInputHandler}
                  showSearchInputHandler={showSearchInputHandler}
                  userInput={userInput}
                /> */}
              </>
            ) : (
              <NavLink key={index} to={item.href} className='nav__icon-link' onClick={closeSearchAndSub}>
                <p className='sr-only'>{item.name}</p>
                <item.icon className='navbar2__icon' />
              </NavLink>
            )}
          </Fragment>
        );
      })}
    </div>
  )
}