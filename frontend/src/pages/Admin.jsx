import React from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import AdminSidebar from '../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'
import '../scss/adminStyles.css'


const Admin = () => {
  return (
    <div>

            <AdminHeader/>
            <AdminSidebar/>
            <Outlet/>
    </div>
  )
}


export default Admin