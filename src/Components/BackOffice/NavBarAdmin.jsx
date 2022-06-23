import React from 'react'
import { navigation } from '../../constants/navBar';
import OfficeBar from './OfficeBar/OfficeBar'
import Logo from '../Header/Navbar/Logo/Logo'

const home = navigation.pages[0];

export default function NavBarAdmin() {
  return (
    <div className="relative flex justify-between">
      <Logo home={home} className="ml-28" />
      <OfficeBar />
    </div>
  )
}
