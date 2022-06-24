import React from 'react'
import FooterAdmin from '../../components/admin/footeradmin/FooterAdmin'
import HeaderAdmin from '../../components/admin/headeradmin/HeaderAdmin'
import AdminRoutes from './AdminRoutes'


export default function AdminDashboard() {
  return (
    <div className='index'>
      <HeaderAdmin />
      <AdminRoutes />
      <FooterAdmin />
    </div>
  )
}