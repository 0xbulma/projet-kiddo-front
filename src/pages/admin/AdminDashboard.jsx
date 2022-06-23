import React from 'react'
import FooterAdmin from '../../components/admin/footerAdmin/FooterAdmin'
import HeaderAdmin from '../../components/admin/headerAdmin/HeaderAdmin'
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