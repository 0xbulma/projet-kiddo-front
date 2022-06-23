import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import './styles/global.css';
import App from './pages/app/App';

import { apollo } from './graphql/apollo';

// import AdminDashboard from './pages/admin/AdminDashboard';

// const [AppRouter, AdminRouter] = [Router, Routes].map(Routes =>
//   Routes({
//     baseUrl: '/',
//     Route: [
//       { path: '/', element: <App /> },
//       { path: '/admin', element: <AdminDashboard /> },
//     ],
//   }),
// );

// const isAdmin = () => {
//   const token = localStorage.getItem('token');
//   return token && token.split('.')[1] === 'admin';
// }

const isAdmin = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        
        <App isAdmin={isAdmin} />
        
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
