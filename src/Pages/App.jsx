import React from 'react';
import {  Routes, Route } from "react-router-dom";

import Contact from './Contact/Contact';
import Home from './Home/Home';
import BackOffice from './BackOffice/Home.BackOffice'
import NotFound from './NotFound/NotFound';

export default function App() {
  return (
    <div className="index">
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BackOffice" element={<BackOffice />} />
          <Route path="/404" element={<NotFound />} /> 
        </Routes>  
      
          
    </div>
  );
}
