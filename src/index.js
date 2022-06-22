import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import reportWebVitals from './reportWebVitals';

import './Styles/global.css';
import App from './Pages/App';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AdminDashboard from './Pages/AdminDashboard';

import { apollo } from './GraphQL/apollo';

let isAdmin = true;
let isUser = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        {/* <Header isAdmin={isAdmin}/> */}
        {isAdmin & isUser ? 
          <Fragment>
            <AdminDashboard />
          </Fragment>
        :
          <Fragment>
            <Header isAdmin={isAdmin}/>
            <App isAdmin={isAdmin}/>
          </Fragment> 
        }
        <App isAdmin={isAdmin}/>
        <Footer />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();