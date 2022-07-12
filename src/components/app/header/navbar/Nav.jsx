import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { Fragment } from 'react';

export default function Nav({
  isSearchOpen, navigation, closeSearchAndSub, toggleSubMenu
}) {
  
  let location = useLocation();
  
  return (
    <>
      {
        !isSearchOpen && (
          <ul className="navbar2__linklist">
            {navigation.map((item, index) => {
              return (
                <Fragment key={index}>
                  {item === navigation[1] ? (
                      <li>
                        <div
                          className={`navbar2__link flex items-center gap-2 ${location.pathname.includes('category') && 'active'}`} onClick={toggleSubMenu}
                        >
                          <span>{item.name}</span>
                          <FaChevronDown />
                        </div>
                      </li>
                  ) : (
                    <li>
                      <NavLink to={item.href} className='navbar__link' onClick={closeSearchAndSub}>
                        {item.name}
                      </NavLink>
                    </li>
                    
                  )}
                </Fragment>
              );
            })}
          </ul>
        )
      }
    </>
  );
}
