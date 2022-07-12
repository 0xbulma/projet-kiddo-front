import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import ISearch from '../../../shared/icons/ISearch'

export default function Search(
  item, isSearchOpen, closeSearch, onInputHandler, showSearchInputHandler, userInput
) {
  return (
    <>
    {isSearchOpen ? (
      <div className='navbar2__searchinput-container'>
        <input
          className='navbar2__searchinput focus:ring-0'
          type='text'
          autoFocus
          placeholder='Trouver une activité...'
          value={userInput}
          onChange={onInputHandler}
        />
        <item.icon onClick={showSearchInputHandler} className='navbar2__icon--searchinput' />
        <FaTimesCircle onClick={closeSearch} className='navbar2__icon--searchinputleft' />
      </div>
    ) : (
      <ISearch onClick={showSearchInputHandler} className='navbar2__icon' />
    )}
    </>
  )
}