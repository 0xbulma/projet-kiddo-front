import { Popover } from '@headlessui/react'

import Navbar from "./navbar/Navbar"

import './_header.css'

export default function Header() {
  return (
    <Popover className="header">
      <Navbar />
    </Popover>
  )
}