import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Submenu({ item }) {
  const submenu = item.submenu;
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 -translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 -translate-y-1'>
      <Popover.Panel className='navbar__subnav'>
        <div className='bg-white'>
          <div className='subnav__content'>
            {submenu.map((category) => (
              <div key={category.name} className='flow-root'>
                <Link
                  to={`/category/${category.category}`}
                  className='subnav__content--link'
                >
                  <p className='ml-3'>{category.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
