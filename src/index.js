import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { apollo } from './graphql/apollo';

import UserLayout from './pages/layout/UserLayout';
import AdminLayout from './pages/layout/AdminLayout';

import AuthContext from './context/AuthContext';

//App layout components

import HomePage from './pages/app/HomePage';
import Kiddo from './pages/app/Kiddo';
import Contact from './pages/app/Contact.jsx';
import NotFound from './pages/app/NotFound.jsx';

import CreateEvents from './pages/app/CreateEvents';
import CategoryPage from './pages/app/CategoryPage';
import EventPage from './pages/app/EventPage';
import SearchPage from './pages/app/SearchPage';

//Admin layout components

import AdminDashboard from './pages/administration/Dashboard';
import AdminUser from './pages/administration/sections/user/User';
import AdminUserProfil from './pages/administration/sections/user/UserProfil';
import AdminUserTestMutation from './pages/administration/sections/user/UserTestMutation';
import UserInfo from './pages/app/UserInfo';
import Signalement from './pages/administration/sections/Report';

// Import CSS
import './style.css';
import UserDashboard from './pages/app/userDashboard/UserDashboard';
import UserDashboard_Activity from './pages/app/userDashboard/UserDashboard_Activity';
import UserDashboard_Fav from './pages/app/userDashboard/UserDashboard_Fav';
import UserDashboard_Notification from './pages/app/userDashboard/UserDashboard_Notification';

let isAdmin = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <ApolloProvider client={apollo}>
    <AuthContext>
      <Router>
        <SearchContext>
          <Routes>
            <Route path='/' element={<UserLayout composant={<HomePage />} />} />
            <Route path='/kiddo' element={<UserLayout composant={<Kiddo />} />} />
            <Route path='/contact' element={<UserLayout composant={<Contact />} />} />
            <Route path='/event/:eventId' element={<UserLayout composant={<EventPage />} />} />
            <Route path='/category/:category' element={<UserLayout composant={<CategoryPage />} />} />
            <Route path='/create-event' element={<UserLayout composant={<CreateEvents />} />} />
            <Route path='*' element={<UserLayout composant={<NotFound />} />} />
            <Route path='/user' element={<UserLayout composant={<UserInfo />} />} />
            <Route path='/search/:params' element={<UserLayout composant={<SearchPage />} />} />
            <Route path='/user/dashboard' element={<UserLayout composant={<UserDashboard />} />} />
            <Route path='/user/dashboard/activity' element={<UserLayout composant={<UserDashboard_Activity />} />} />
            <Route path='/user/dashboard/fav' element={<UserLayout composant={<UserDashboard_Fav />} />} />
            <Route path='/user/dashboard/notification' element={<UserLayout composant={<UserDashboard_Notification />} />} />
            {isAdmin && (
              <Fragment>
                <Route path='/administration' element={<AdminLayout composant={<AdminDashboard />} />} />
                <Route path='/administration/users' element={<AdminLayout composant={<AdminUser />} />} />
                <Route path='/administration/users/:id' element={<AdminLayout composant={<AdminUserProfil />} />} />
                <Route path='/administration/reports' element={<AdminLayout composant={<Signalement />} />} />
                <Route path='/administration/userTest' element={<AdminLayout composant={<AdminUserTestMutation />} />} />
              </Fragment>
            )}
          </Routes>
        </SearchContext>
      </Router>
    </AuthContext>
  </ApolloProvider>
  // </React.StrictMode>
);

reportWebVitals();
