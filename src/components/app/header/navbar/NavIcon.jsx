import { Fragment, useState } from 'react'
import ModalBackdrop from '../../../shared/modal/ModalBackdrop'
import Register from '../../register/Register'

export default function NavIcon({ navIcon }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  return (
    <div className='navbar__nav'>
      {
        navIcon.map((item, index) => {
          return (
            <Fragment key={index}>
              {
                item === navIcon[3] ? (
                  <Fragment>
                    <button onClick={openModal} className="nav__icon-button">
                      <item.icon className="nav-icon" />
                    </button>
                    <ModalBackdrop
                      composant={<Register />}
                      open={isOpen}
                      onClose={closeModal}
                    />
                  </Fragment>
                ) : (
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