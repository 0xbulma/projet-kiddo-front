import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import './Styles/global.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { apollo } from './GraphQL/apollo';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        <Header />
        <App />
        <Footer />
      </Router>  
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();