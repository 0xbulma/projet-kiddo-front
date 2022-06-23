import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import './styles/global.css';
import App from './pages/App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import AdminDashboard from './pages/AdminDashboard';

import { apollo } from './graphQL/apollo';
import AdminDashboard from './pages/AdminDashboard';

let isAdmin = true;
// let isUser = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        <Header isAdmin={isAdmin}/>
        <App isAdmin={isAdmin}/>
        <AdminDashboard />
        <Footer />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
