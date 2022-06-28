import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/app/Home';
import Header from './components/app/header/Header';
import Footer from './components/app/footer/Footer';

import Contact from './pages/app/Contact.jsx';
import Events from './pages/app/Events.jsx';
import NotFound from './pages/app/NotFound.jsx';


import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';

import './global.css';
// import App from './pages/app/App';

import { apollo } from './graphql/apollo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
