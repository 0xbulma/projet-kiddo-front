import { Popover } from '@headlessui/react';
import Menu from './navbar/Menu';

import Navbar from './navbar/Navbar';
import Navbar2 from './navbar2/Navbar2';

import './_header.css';

export default function Header() {
  return (
    <Popover className="header">
      <Navbar /> 
      <Navbar2 />
      <Menu />
    </Popover>
  );
}
