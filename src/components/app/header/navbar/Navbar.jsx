import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';

import NavIcon from './NavIcon';
import { navigationHeader } from '../../../../utils/constants/navigation';

import Logo from '../../../shared/Logo';
import Nav from './Nav';
import ISearch from '../../../shared/icons/ISearch';

const titleProp = navigationHeader.titleProp;
const navigation = navigationHeader.navigation;
const navIcon = navigationHeader.navIcon;

export default function Navbar({ open, margin }) {
  return (
    <section className='header__navbar'>
      <div className='header__navbar--flex'>
        <Logo titleProp={titleProp} className='md:w-40 w-28' />
        <div className='flex flex-row items-center justify-center gap-x-2 md:-my-2 md:-mr-2 md:hidden'>
          <button type="button" className='text-black bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'>
            <ISearch className="w-6 h-5"/>
          </button>
          <Popover.Button className='inline-flex justify-center p-2 text-black bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='w-6 h-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Nav navigation={navigation} />
          <NavIcon navIcon={navIcon} />
        </div>
      </div>
    </section>
  );
}
