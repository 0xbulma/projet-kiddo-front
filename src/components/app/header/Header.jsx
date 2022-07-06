import { Popover } from '@headlessui/react'

import Navbar from "./navbar/Navbar"

import './_header.css'

export let headerMargin = 'mb-0';

export default function Header() {
  return (
    <Popover className={`header ${headerMargin}`} >
      <Navbar margin={headerMargin} />
    </Popover>
  )
}