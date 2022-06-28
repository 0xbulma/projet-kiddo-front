import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import './global.css';
// import App from './pages/app/App';

import { apollo } from './graphql/apollo';

import DashboardRoutes from './indexBack';
import AppRoutes from '.';

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

// const isAdmin = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>

     {isAdmin && <Router>
      <Routes>
        <Route path='/admin'/>
      </Routes>
     </Router>}


      {!isAdmin && <Router>
        <Routes>
        <Route path='/'/>
      </Routes>
        </Router>}

      <Router>
        {/* <App isAdmin={isAdmin} /> */}
        {/* <AdminDashboard /> */}
          {AppRoutes}
        {/* <DashboardRoutes /> */}
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
