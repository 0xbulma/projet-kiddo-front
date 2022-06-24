import React from 'react'

import NavBar from './navbar/NavBar'

export default function header(isAdmin) {
  return (
    <div claxssName='header'>
      <NavBar isAdmin={isAdmin} />
    </div>
  )
}