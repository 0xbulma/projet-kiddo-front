import React from 'react'

export default function NavIcon({ navIcon }) {
  return (
    <div className='navbar__nav'>
      {
        navIcon.map((item, index) => {
          return (
            <a key={index} href={item.href} className="nav__icon-link">
              <p className='sr-only'>{item.name}</p>
              <item.icon className='nav-icon' />
            </a>
          )
        })
      }
    </div>
  )
}