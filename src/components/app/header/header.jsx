import React from 'react'

import NavBar from './navBar/NavBar'

export default function header(isAdmin) {
  return (
    <div claxssName='header'>
      <NavBar isAdmin={isAdmin} />
    </div>
  )
}