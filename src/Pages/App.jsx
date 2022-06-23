import React from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./contact/Contact";
import Home from "./home/Home";

import HomeAdmin from "./backoffice/Home.BackOffice";
import UsersBackOffice from "./backoffice/Users.BackOffice";
import EventsBackOffice from "./backoffice/Events.BackOffice";
import ExtraBackOffice from "./backoffice/Extra.BackOffice";
import SignalBackOffice from "./backoffice/Signal.BackOffice";
import NotFound from "./notfound/NotFound";

// import Header from "../Components/Header/Header";

// const isUser = true;

export default function App({ isAdmin }) {
  return (
    <div className="index">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />

        {isAdmin ? (
          <Route path="/BackOffice" element={<HomeAdmin />} />
        ) : (
          <Route path="/404" element={<NotFound />} />
        )}
        <Route path="/BackOffice/Users" element={<UsersBackOffice />} />
        <Route path="/BackOffice/Events" element={<EventsBackOffice />} />
        <Route path="/BackOffice/Extra" element={<ExtraBackOffice />} />
        <Route path="/BackOffice/Signal" element={<SignalBackOffice />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}
