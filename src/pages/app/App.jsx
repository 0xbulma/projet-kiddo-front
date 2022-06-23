import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import NotFound from "../notFound/NotFound";

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
