import React from "react";
import { Route, Routes } from "react-router";

import Home from "./home/Home";
import Contact from "./Contact/Contact";
import NotFound from "../notFound/NotFound";
import Events from "./events/Events";
import Register from "../../components/app/register/Register";
import Login from "../../components/app/login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}
