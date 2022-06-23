import React from 'react'
import { navigation } from '../../../../constants/navBar';
import Logo from '../../../app/header/navBar/logo/Logo'

const home = navigation.pages[0];

export default function NavBarAdmin() {
  return (
    <nav aria-label='top' className='Navbar'>
      <div className="NavbarDiv">
        <Logo home={home} className="-ml-28"/>
      </div>
    </nav>
  )
}