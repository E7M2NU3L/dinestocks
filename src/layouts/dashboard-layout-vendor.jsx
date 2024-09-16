import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarVendor from '../components/dashboard/sidebar-vendor'

const DashboardLayoutVendor = () => {
  return (
    <main>
        <SidebarVendor />
        <Outlet />
    </main>
  )
}

export default DashboardLayoutVendor