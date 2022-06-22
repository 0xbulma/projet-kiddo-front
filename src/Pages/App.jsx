import React from 'react';
import { Route, Routes } from 'react-router';

import Contact from './Contact/Contact';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export default function App() {
  return (
    <div className="index">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/404" element={<NotFound />} /> 
      </Routes>      
    </div>
  );
}
