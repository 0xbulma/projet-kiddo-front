import { Popover } from '@headlessui/react';
import Menu from './navbar/Menu';

import Navbar from './navbar/Navbar';

import './_header.css';

export default function Header() {
  return (
    <Popover className={`header`}>
      <Navbar />
      <Menu />
    </Popover>
  );
}
