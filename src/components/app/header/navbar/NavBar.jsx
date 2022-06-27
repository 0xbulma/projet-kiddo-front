import React from 'react'
import { useNavigate } from 'react-router';

import { navigation } from '../../../../constants/navBar';
import Logo from './logo/Logo';
import Nav from './nav/Nav';

const home = navigation.pages[0];

export default function NavBar({isAdmin}) {
  const navigate = useNavigate()
  
  return (
    <nav aria-label='top' className='header__Navbar'>
      <div className="NavbarDiv">
        <div className="NavbarFlex">
          <Logo home={home} className="-ml-28"/>
          <Nav navigation={navigation} />
          <div className="lastChild">
            {/* <Search /> */}
            {/* <Profile /> */}
            {
              isAdmin && <button onClick={()=>navigate('/admin')} variant="outlined">BackOffice</button>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}