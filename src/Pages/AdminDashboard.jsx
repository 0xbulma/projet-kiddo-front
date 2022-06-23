import React, { Fragment } from 'react'
import { Route } from 'react-router'
// import NavBarAdmin from '../components/backOffice/NavBarAdmin'

import EventsBackOffice from './BackOffice/Events.BackOffice'
import ExtraBackOffice from './BackOffice/Extra.BackOffice'
import HomeAdmin from './BackOffice/Home.BackOffice'
import SignalBackOffice from './BackOffice/Signal.BackOffice'
import UsersBackOffice from './BackOffice/Users.BackOffice'
// import NotFound from './NotFound/NotFound'

export default function AdminDashboard(isAdmin) {
  return (
    <Fragment>
      <Route path="/BackOffice" element={<HomeAdmin />} />
      <Route path="/BackOffice/Users" element={<UsersBackOffice />} />
      <Route path="/BackOffice/Events" element={<EventsBackOffice />} />
      <Route path="/BackOffice/Extra" element={<ExtraBackOffice />} />
      <Route path="/BackOffice/Signal" element={<SignalBackOffice />} />
    </Fragment>
  )
}
