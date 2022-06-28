import React from "react";

import { Route, Routes } from "react-router";

import HomeAdmin from "./home/Home.admin";
import UsersAdmin from "./users/Users.admin";
import EventsAdmin from "./events/Events.admin";
import ExtraAdmin from "./extra/Extra.admin";
import SignalAdmin from "./signal/Signal.admin";
// deja dans le app.routes
// import NotFound from "../notfound/NotFound";
import ArticlesAdmin from "./articles/Articles.admin";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/admin/users" element={<UsersAdmin />} />
      <Route path="/admin/events" element={<EventsAdmin />} />
      <Route path="/admin/aricles" element={<ArticlesAdmin />} />
      <Route path="/admin/extra" element={<ExtraAdmin />} />
      <Route path="/admin/signal" element={<SignalAdmin />} />
    </Routes>
  );
}
