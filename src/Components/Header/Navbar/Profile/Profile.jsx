import React from 'react'
// import { Link } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/outline'


export default function Profile() {
  const session = "Sess";
  const user = "Sess";
  return (
    <div className="Navbar__profile">
      {
        session ?? (
          <div className="Navbar__profile">
            <a href="/profile" className="Navbar__profile-link">
              <UserIcon className="Navbar__profile-image" aria-hidden="true" />
              <p className="Navbar__profile-name">{user}</p>
              <span className="sr-only">My profile</span>
            </a>
          </div>
        )
      }
      {
        !session ?? (
          <div className="Navbar__profile">
            <a href="/" className="Navbar__profile-link">
              <UserIcon className="Navbar__profile-image" aria-hidden="true" />
              <p className="Navbar__profile-name">not Connected</p>
              <span className="sr-only">My profile</span>
            </a>
          </div>
        )
      }
    </div>
  )
}