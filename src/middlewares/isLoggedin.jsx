import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const IsLoggedin = () => {
  const AuthInfo = useSelector((state) => state.auth);
  console.log(AuthInfo);

  return (
    <div>
        {AuthInfo ? <Outlet /> : <Navigate to={"/sign-up"} />}
    </div>
  )
}

export default IsLoggedin