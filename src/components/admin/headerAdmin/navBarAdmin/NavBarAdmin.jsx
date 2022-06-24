import React from 'react'
import { navigation, navigationAdmin } from '../../../../constants/navBar';
import Logo from '../../../app/header/navBar/logo/Logo'
import NavAdmin from './navadmin/NavAdmin';

const home = navigation.pages[0];

export default function NavBarAdmin() {
  return (
    <nav aria-label='top' className='header__Navbar'>
      <div className="header__Navbar" id="div">
        <div className="header__Navbar" id="Flex">
          <Logo home={home} className="-ml-28"/>
          <span>Dashboard</span>
          <NavAdmin navigationAdmin={navigationAdmin} />
          {console.log("coucou")}
        </div>
      </div>
    </nav>
  )
}