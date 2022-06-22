import { SearchIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

export default function Search() {
  return (
    <Fragment>
      <a href="/" className="Navbar__search">
        <span className="search">Search</span>
        <SearchIcon className="search-icon" aria-hidden="true" />
      </a>
    </Fragment>
  )
}