import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { apollo } from './graphql/apollo';

import UserLayout from './pages/layout/UserLayout';
import AdminLayout from './pages/layout/AdminLayout';

//App layout components

import Home from './pages/app/Home';
import Contact from './pages/app/Contact.jsx';
import NotFound from './pages/app/NotFound.jsx';

import CategoryPage from './pages/app/CategoryPage';
import EventPage from './pages/app/EventPage';

//Admin layout components

import AdminDashboard from './pages/administration/Dashboard';
import AdminUser from './pages/administration/sections/user/User';
import AdminUserProfil from './pages/administration/sections/user/UserProfil';
import AdminUserTestMutation from './pages/administration/sections/user/UserTestMutation';

import './global.css';
import CommentSection from './components/comment/CommentSection';

let isAdmin = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <ApolloProvider client={apollo}>
    <Router>
      <Routes>
        <Route path='/' element={<UserLayout composant={<Home />} />} />
        <Route path='/contact' element={<UserLayout composant={<Contact />} />} />
        <Route path='/comment/:id' element={<UserLayout composant={<CommentSection />} />} />
        {/* <Route path='/events' element={<UserLayout composant={<Events />} />} /> */}
        <Route path='/event/:id' element={<UserLayout composant={<EventPage />} />} />
        <Route path='/category/:category' element={<UserLayout composant={<CategoryPage />} />} />
        <Route path='*' element={<UserLayout composant={<NotFound />} />} />
        {isAdmin && (
          <Fragment>
            <Route path='/administration' element={<AdminLayout composant={<AdminDashboard />} />} />
            <Route path='/administration/users' element={<AdminLayout composant={<AdminUser />} />} />
            <Route path='/administration/users/:id' element={<AdminLayout composant={<AdminUserProfil />} />} />
            <Route path='/administration/userTest' element={<AdminLayout composant={<AdminUserTestMutation />} />} />
          </Fragment>
        )}

        {/* <Route path="/users" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  </ApolloProvider>
  // </React.StrictMode>
);

reportWebVitals();
