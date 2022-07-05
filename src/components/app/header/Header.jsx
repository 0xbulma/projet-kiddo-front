import { Popover } from '@headlessui/react'

import Navbar from "./navbar/Navbar"
// import Menu from './navbar/Menu';

import './_header.css'

export default function Header() {
  return (
    <Popover className="header">
      <Navbar />
      {/* <Menu /> */}
    </Popover>
  )
}