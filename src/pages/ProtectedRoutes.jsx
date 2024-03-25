import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const trainer = useSelector(store => store.trainer)
 
  if(trainer.length >= 3){
    //cualquiera de las rutas que se quiera acceder
    return <Outlet />
  }
  else{
    //navegar hacia la home
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes