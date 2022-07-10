// import NavItem from "./NavItem";
import { Fragment } from 'react';
import { Popover } from '@headlessui/react';

import { classNames } from '../../../../utils/lib/classNames';
import Submenu from './Submenu';
import { Link } from 'react-router-dom';

export default function Nav({ navigation }) {
  return (
    <Popover.Group as='nav' className='flex space-x-10'>
      {navigation.map((item, index) => {
        return (
          <Fragment key={index}>
            {
              item === navigation[1] ? (
                <Popover>
                  {({ open }) => (
                    <Fragment>
                      <Popover.Button
                        className={
                          classNames(
                            open ? 'text-gray-900' : 'text-black',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none hover:underline active:underline afte:underline'
                          )
                        }
                      >
                        <span>{item.name}</span>
                      </Popover.Button>
                      <Submenu item={item} />
                    </Fragment>
                  )}
                </Popover>
              ) : (
                <Link to={item.href} className='text-base font-medium text-black hover:text-gray-900 focus:underline after:underline hover:underline'>
                  {item.name}
                </Link>
              )
            }
          </Fragment>
        );
      })}
    </Popover.Group>
  );
}
