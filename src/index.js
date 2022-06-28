import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { apollo } from './graphql/apollo';

import UserLayout from './pages/layout/UserLayout';
import AdminLayout from './pages/layout/AdminLayout';
import Home from './pages/app/Home';
import Contact from './pages/app/Contact.jsx';
import Events from './pages/app/Events.jsx';
import NotFound from './pages/app/NotFound.jsx';
import Dashboard from './pages/administration/Dashboard';

import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        <Routes>
          <Route path='/' element={<UserLayout composant={Home} />} />
          <Route path='/contact' element={<UserLayout composant={Contact} />} />
          <Route path='/events' element={<UserLayout composant={Events} />} />
          <Route path='*' element={<UserLayout composant={NotFound} />} />
          <Route path='/administration' element={<AdminLayout composant={Dashboard} />} />
          {/* <Route path="/users" element={<User />} /> */}
          {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
