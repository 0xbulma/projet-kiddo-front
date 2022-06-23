import React from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
// import Profile from './Profile/Profile'
// import Search from './Search/Search'
import { navigation } from '../../../Constants/navBar';
import { Button } from '@mui/material'

const home = navigation.pages[0];
console.log(home);

export default function Navbar({navigate, isAdmin}) {
  return (
    <nav aria-label='top' className='Navbar'>
      <div className="NavbarDiv">
        <div className="NavbarFlex">
          <Logo home={home} className="-ml-28"/>
          <Nav navigation={navigation} isAdmin={isAdmin}/>
          <div className="lastChild">
            {/* <Search /> */}
            {/* <Profile /> */}
            {
              isAdmin && <Button onClick={()=>navigate('/BackOffice')} variant="outlined">BackOffice</Button>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}