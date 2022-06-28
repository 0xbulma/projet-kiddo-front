import React from 'react';

import { Route, Routes } from 'react-router';

import Dashboard from './Dashboard';
import User from './sections/user/User';

import Navbar from '../../components/administration/Navbar';
import App from '../app/App';

export default function DashboardRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/administration' element={<Dashboard />} />
        <Route path='/administration/users' element={<User />} />
      </Routes>
    </>
  );
}
