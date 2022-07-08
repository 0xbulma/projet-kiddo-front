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

import Home from './pages/app/Home';
import Kiddo from './pages/app/Kiddo';
import Contact from './pages/app/Contact.jsx';
import NotFound from './pages/app/NotFound.jsx';

import CategoryPage from './pages/app/CategoryPage';
import EventPage from './pages/app/EventPage';

//Admin layout components

import AdminDashboard from './pages/administration/Dashboard';
import AdminUser from './pages/administration/sections/user/User';
import AdminUserProfil from './pages/administration/sections/user/UserProfil';
import AdminUserTestMutation from './pages/administration/sections/user/UserTestMutation';
import UserInfo from './pages/app/UserInfo';
import Signalement from './pages/administration/sections/Report';
// import UserInfo from "./pages/app/UserInfo";

// Import CSS
import './style.css';

let isAdmin = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <ApolloProvider client={apollo}>
    <AuthContext>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout composant={<Home />} />} />
          <Route path="/kiddo" element={<UserLayout composant={<Kiddo />} />} />
          <Route
            path="/contact"
            element={<UserLayout composant={<Contact />} />}
          />
          <Route
            path="/user"
            element={<UserLayout composant={<UserInfo />} />}
          />
          <Route
            path="/event/:eventId"
            element={<UserLayout composant={<EventPage />} />}
          />
          <Route
            path="/category/:category"
            element={<UserLayout composant={<CategoryPage />} />}
          />
          <Route path="*" element={<UserLayout composant={<NotFound />} />} />
          {isAdmin && (
            <Fragment>
              <Route
                path="/administration"
                element={<AdminLayout composant={<AdminDashboard />} />}
              />
              <Route
                path="/administration/users"
                element={<AdminLayout composant={<AdminUser />} />}
              />
              <Route
                path="/administration/users/:id"
                element={<AdminLayout composant={<AdminUserProfil />} />}
              />
              <Route
                path="/administration/reports"
                element={<AdminLayout composant={<Signalement />} />}
              />
              <Route
                path="/administration/userTest"
                element={<AdminLayout composant={<AdminUserTestMutation />} />}
              />
            </Fragment>
          )}
        </Routes>
      </Router>
    </AuthContext>
  </ApolloProvider>
  // </React.StrictMode>
);

reportWebVitals();
