import React from 'react'
import SidebarRestaurant from '../components/dashboard/sidebar-restaurant'
import { Outlet } from 'react-router-dom'

const DahsboardLayoutRestaurant = () => {
  return (
    <main>
        <SidebarRestaurant />
        <Outlet />
    </main>
  )
}

export default DahsboardLayoutRestaurant