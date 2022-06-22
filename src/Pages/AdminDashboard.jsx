import React, { Fragment } from 'react'
// import { Route } from 'react-router'
import NavBarAdmin from '../Components/BackOffice/NavBarAdmin'
// import NavBarAdmin from '../Components/BackOffice/NavBarAdmin'
// import EventsBackOffice from './BackOffice/Events.BackOffice'
// import ExtraBackOffice from './BackOffice/Extra.BackOffice'
import HomeAdmin from './BackOffice/Home.BackOffice'
// import SignalBackOffice from './BackOffice/Signal.BackOffice'
// import UsersBackOffice from './BackOffice/Users.BackOffice'
// import NotFound from './NotFound/NotFound'

export default function AdminDashboard(isAdmin) {
  return (
    <Fragment>
      <NavBarAdmin />
      <HomeAdmin />
    </Fragment>
  )
}
