import React from 'react'
import { Outlet } from 'react-router-dom'

const IsLoggedin = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default IsLoggedin