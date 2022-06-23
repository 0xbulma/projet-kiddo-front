import React from 'react'
import { navigation, navigationAdmin } from '../../../../constants/navBar';
import Logo from '../../../app/header/navBar/logo/Logo'
import NavAdmin from './navAdmin/NavAdmin';

const home = navigation.pages[0];

export default function NavBarAdmin() {
  return (
    <nav aria-label='top' className='Navbar'>
      <div className="NavbarDiv">
        <Logo home={home} className="-ml-28"/>
        <span>Dashboard</span>
        <NavAdmin navigationAdmin={navigationAdmin} />
      </div>
    </nav>
  )
}