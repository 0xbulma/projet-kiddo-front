import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import './styles/global.css';
import App from './pages/app/App';

import { apollo } from './graphql/apollo';
import AdminDashboard from './pages/admin/AdminDashboard';

// const [AppRouter, AdminRouter] = [Router, Router].map(router =>
//   router({
//     baseUrl: '/',
//     routes: [
//       { path: '/', element: <App /> },
//       { path: '/admin', element: <AdminDashboard /> },
//     ],
//   }),
// );

// const isAdmin = () => {
//   const token = localStorage.getItem('token');
//   return token && token.split('.')[1] === 'admin';
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        {/* 
        {isAdmin() ? <AdminRouter /> : <AppRouter />} 
        */}
        <App />
        <AdminDashboard />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
