import React from 'react'
import { Route, Routes } from 'react-router'

import Home from "./home/Home";
import Contact from "./Contact/Contact";
import NotFound from "../notFound/NotFound";
import Events from './events/Events';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  )
}
