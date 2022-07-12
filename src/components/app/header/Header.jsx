import { Popover } from '@headlessui/react';
import Menu from './navbar/Menu';

import Navbar from './navbar/Navbar';

// import './navbar2/navbar2.css';

export default function Header() {
  return (
    <Popover>
      <Navbar />
      <Menu />
    </Popover>
  );
}
