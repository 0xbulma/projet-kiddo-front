import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';

import Dashboard from './pages/administration/Dashboard';

import './global.css';
// import App from './pages/app/App';

import { apollo } from './graphql/apollo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router basename='/administration'>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/users" element={<User />} /> */}
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
