import React from 'react';

import { Route, Routes } from 'react-router';

import Dashboard from './Dashboard';
import User from './sections/user/User';

// import Navbar from "../../components/administration/Navbar";
import App from '../app/App';

import Register from '../../components/app/register/Register';
import Login from '../../components/app/login/Login';

export default function DashboardRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/administration' element={<Dashboard />} />
        <Route path='/administration/users' element={<User />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

{
  /* <Route path='/administration' element={<Dashboard />} />
        <Route path='/administration/users' element={<User />} />
        <Route path='/administration/users/:id' element={<UserProfil />} />
        <Route path='/administration/userTest' element={<UserTestMutation />} /> */
}
