import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';

import NavIcon from './NavIcon';
import { navigationHeader } from '../../../../utils/constants/navigation';

import Logo from '../../../shared/Logo';
import Nav from './Nav';

const titleProp = navigationHeader.titleProp;
const navigation = navigationHeader.navigation;
const navIcon = navigationHeader.navIcon;

export default function Navbar({ open, margin }) {
  return (
    <section className='bg-[#E4E3E3] shadow-md'>
      <div className='header__navbar '>
        <Logo titleProp={titleProp} className='w-40 h-40' />
        <div className='md:-my-2 md:-mr-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:underline'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='w-6 h-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Nav navigation={navigation} margin={margin} />
        <NavIcon navIcon={navIcon} />
      </div>
    </section>
  );
}
