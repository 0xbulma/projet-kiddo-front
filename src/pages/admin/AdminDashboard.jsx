import React from 'react'
import { Route, Routes } from 'react-router'

import HomeAdmin from './home/Home.admin'
import UsersAdmin from './users/Users.admin'
import EventsAdmin from './events/Events.admin'
import ExtraAdmin from './extra/Extra.admin'
import SignalAdmin from './signal/Signal.admin'
import NotFound from '../notFound/NotFound'

export default function AdminDashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeAdmin />} />
        <Route path="/users" element={<UsersAdmin />} />
        <Route path="/events" element={<EventsAdmin />} />
        <Route path="/extra" element={<ExtraAdmin />} />
        <Route path="/signal" element={<SignalAdmin />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  )
}