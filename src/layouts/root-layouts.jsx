import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const RootLayout = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default RootLayout