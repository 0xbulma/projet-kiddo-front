import React from 'react';

import { Router, Routes, Route } from 'react-router';

import Dashboard from './Dashboard';
import User from './sections/user/User';
import UserProfil from './sections/user/UserProfil';

import Navbar from '../../components/administration/Navbar';
import App from '../app/App';
import UserTestMutation from './sections/user/UserTestMutation';

export default function DashboardRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/administration' element={<Dashboard />} />
        <Route path='/administration/users' element={<User />} />
        <Route path='/administration/users/:id' element={<UserProfil />} />
        <Route path='/administration/userTest' element={<UserTestMutation />} />
      </Routes>
    </>
  );
}
