// import NavItem from "./NavItem";
import { Fragment } from 'react';
import { Popover } from '@headlessui/react';

import { classNames } from '../../../../utils/lib/classNames';
import Submenu from './Submenu';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <Popover.Group as='nav' className='flex space-x-10'>
      {props.navigation.map((item, index) => {
        return (
          <Fragment key={index}>
            {item === props.navigation[1] ? (
              <Popover>
                {({ open }) => (
                  <Fragment>
                    <Popover.Button
                      className={classNames((open ? 'text-gray-900' : 'text-black') + ' text-base font-medium hover:text-gray-900 hover:underline')}>
                      <p>{item.name}</p>
                    </Popover.Button>

                    <Submenu item={item} />
                  </Fragment>
                )}
              </Popover>
            ) : (
              <Link to={item.href} className='text-base font-medium text-black hover:text-gray-900 focus:underline after:underline hover:underline'>
                {item.name}
              </Link>
            )}
          </Fragment>
        );
      })}
    </Popover.Group>
  );
}
