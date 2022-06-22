import React from 'react'

import Navbar from './Navbar/Navbar'

import { useNavigate } from 'react-router-dom'
// import  Button  from '@mui/material/Button'


export default function Header() {
  const navigate = useNavigate()
  return (

    <div className='header'>
      <Navbar navigate={navigate}/>
    </div>
  )
}