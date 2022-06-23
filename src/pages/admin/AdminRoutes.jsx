import React from 'react'

import { Route, Routes } from 'react-router'

import HomeAdmin from './home/Home.admin'
import UsersAdmin from './users/Users.admin'
import EventsAdmin from './events/Events.admin'
import ExtraAdmin from './extra/Extra.admin'
import SignalAdmin from './signal/Signal.admin'
import NotFound from '../notFound/NotFound'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/Admin" element={<HomeAdmin />} />
      <Route path="/Admin/users" element={<UsersAdmin />} />
      <Route path="/Admin/events" element={<EventsAdmin />} />
      <Route path="/Admin/extra" element={<ExtraAdmin />} />
      <Route path="/Admin/signal" element={<SignalAdmin />} />
      <Route path="/Admin/404" element={<NotFound />} />
    </Routes>
  )
}
