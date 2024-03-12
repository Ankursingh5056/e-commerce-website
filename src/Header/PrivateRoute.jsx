

import React, { useContext } from 'react'
import { myContext } from '../ContextApi'

import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
  const{isAuth} = useContext(myContext)
  return isAuth ? children : <Navigate to="/login"/>
}

export default PrivateRoute
