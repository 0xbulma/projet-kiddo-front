import { Menu } from '@headlessui/react';
import React from 'react'
import { useNavigate } from 'react-router';
import useAuthContext from '../../../../hooks/useAuthContext';
import ProfileMenu from './ProfileMenu';

export default function Profile(
  item, toggleProfile, profileIsShown, closeSearchAndSub, setIsModal
  ) {
    
    const { isAuth, _id, loggedOut } = useAuthContext();
    
    const navigate = useNavigate();
    
  return (
    <>
      {isAuth ? (
        <Menu as='div' className='relative'>
          <Menu.Button onClick={toggleProfile} className='flex items-center outline-none'>
            <item.icon className='navbar2__icon' />
          </Menu.Button>
          <ProfileMenu
            isShown={profileIsShown}
            goToDashboard={() => {
              closeSearchAndSub();
              navigate('/dashboard');
            }}
            goToProfile={() => {
              closeSearchAndSub();
              navigate('dashboard/user');
            }}
            logOut={() => {
              closeSearchAndSub();
              navigate('/');
              loggedOut(_id);
            }}
          />
        </Menu>
      ) : (
        <item.icon className='navbar2__icon' onClick={() => setIsModal(true)} />
      )}
    </>
  )
}