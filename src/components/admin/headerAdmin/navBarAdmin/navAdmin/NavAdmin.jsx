import React from 'react'
import NavItemAdmin from './navitemadmin/NavItemAdmin'

export default function Nav({ navigationAdmin }) {
  return (
    <div className="Navbar__nav">
      {
        navigationAdmin.pages.map((page) => (
          <NavItemAdmin key={page.name} page={page} />
        ))
      }
      {console.log("coucou")}
    </div>
  )
}