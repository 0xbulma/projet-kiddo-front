import React from 'react';
import {  Routes, Route } from "react-router-dom";

import Contact from './Contact/Contact';
import Home from './Home/Home';
import BackOffice from './BackOffice/Home.BackOffice'
import UsersBackOffice from './BackOffice/Users.BackOffice';
import EventsBackOffice from './BackOffice/Events.BackOffice';
import ExtraBackOffice from './BackOffice/Extra.BackOffice';
import SignalBackOffice from './BackOffice/Signal.BackOffice';
import NotFound from './NotFound/NotFound';

export default function App() {
  return (
    <div className="index">
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          
          <Route path="/BackOffice" element={<BackOffice />} />
          <Route path="/BackOffice/Users" element={<UsersBackOffice />} />
          <Route path="/BackOffice/Events" element={<EventsBackOffice />} />
          <Route path="/BackOffice/Extra" element={<ExtraBackOffice />} />
          <Route path="/BackOffice/Signal" element={<SignalBackOffice />} />
          <Route path="/404" element={<NotFound />} /> 
        </Routes>  
      
          
    </div>
  );
}
