import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard/sidebar'

const DashboardLayout = () => {
  return (
    <main>
        <Sidebar />
        <Outlet />
    </main>
  )
}

export default DashboardLayout