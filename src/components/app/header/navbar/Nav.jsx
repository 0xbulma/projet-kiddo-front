// import NavItem from "./NavItem";
import { Popover } from '@headlessui/react';

import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export default function Nav({
  isSearchOpen, navigation, showSubMenu
}) {
  return (
    <>
      {
        !isSearchOpen && (
          <Popover.Group as='nav' className='flex space-x-10'>
            {navigation.map((item, index) => {
              return (
                <ul className="navbar2__linklist" key={index}>
                  {item === navigation[1] ? (
                      <li>
                        <div
                          onClick={showSubMenu}
                          className='navbar2__link flex items-center gap-2'
                        >
                          <span>{item.name}</span>
                          <FaChevronDown />
                        </div>
                      </li>
                  ) : (
                    <li>
                      <NavLink to={item.href} className='navbar2__link'>
                        {item.name}
                      </NavLink>
                    </li>
                    
                  )}
                </ul>
              );
            })}
          </Popover.Group>
        )
      }
    </>
  );
}
