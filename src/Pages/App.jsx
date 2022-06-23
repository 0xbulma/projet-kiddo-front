import React from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./contact/Contact";
import Home from "./home/Home";

// import HomeAdmin from "./backOffice/Home.BackOffice";
// import UsersBackOffice from "./backOffice/Users.BackOffice";
// import EventsBackOffice from "./backOffice/Events.BackOffice";
// import ExtraBackOffice from "./backOffice/Extra.BackOffice";
// import SignalBackOffice from "./backOffice/Signal.BackOffice";
import NotFound from "./notFound/NotFound";

// const isUser = true;

export default function App({ isAdmin }) {
  return (
    <div className="index">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* {isAdmin ? <Route path="/BackOffice" element={<HomeAdmin />} /> : <Route path="/404" element={<NotFound />} />} */}
        {/* <Route path="/backOffice" element={<HomeAdmin />} />
        <Route path="/backOffice/Users" element={<UsersBackOffice />} />
        <Route path="/backOffice/Events" element={<EventsBackOffice />} />
        <Route path="/backOffice/Extra" element={<ExtraBackOffice />} />
        <Route path="/backOffice/Signal" element={<SignalBackOffice />} /> */}
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}
