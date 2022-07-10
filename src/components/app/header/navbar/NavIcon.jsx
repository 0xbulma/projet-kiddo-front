import { Menu } from '@headlessui/react';
import { Fragment, useState } from 'react'
import ModalBackdrop from '../../../shared/modal/ModalBackdrop'
import Register from '../../register/Register'
import ProfileMenu from './ProfileMenu';
import Search from './Search'

const isLoggedIn = true;

export default function NavIcon({ navIcon }) {
  let [isOpenRegister, setIsOpenRegister] = useState(false)
  let [isOpenSearch, setIsOpenSearch] = useState(false)

  function closeModalRegister() {
    setIsOpenRegister(false)
  }

  function openModalRegister() {
    setIsOpenRegister(true)
  }
  
  function closeModalSearch() {
    setIsOpenSearch(false)
  }

  function openModalSearch() {
    setIsOpenSearch(true)
  }
  
  return (
    <div className='navbar__nav'>
      {
        navIcon.map((item, index) => {
          return (
            <Fragment key={index}>
              {
                item === navIcon[3] ? (
                  <>
                    {
                      isLoggedIn ? (
                        <Menu as="div" className="relative inline-block text-left">
                          <Menu.Button className="nav__icon-link">
                            <item.icon className="nav-icon" />
                          </Menu.Button>
                          <ProfileMenu />
                        </Menu>
                      ) : (
                        <Fragment>
                          <button onClick={openModalRegister} className="nav__icon-link">
                            <item.icon className="nav-icon" />
                          </button>
                          <ModalBackdrop
                            composant={<Register />}
                            open={isOpenRegister}
                            onClose={closeModalRegister}
                          />
                        </Fragment>
                      )
                    }
                  </>
                ) : 
                item === navIcon[0] ? (
                  <Fragment>
                    <button onClick={openModalSearch} className="nav__icon-link">
                      <item.icon className="nav-icon" />
                    </button>
                    <ModalBackdrop
                      composant={<Search />}
                      open={isOpenSearch}
                      onClose={closeModalSearch}
                    />
                  </Fragment>
                ) 
                : (
                  <a key={index} href={item.href} className="nav__icon-link">
                    <p className='sr-only'>{item.name}</p>
                    <item.icon className="nav-icon" />
                  </a>
                )
              }
            </Fragment>
          )
        })
      }
    </div>
  )
}