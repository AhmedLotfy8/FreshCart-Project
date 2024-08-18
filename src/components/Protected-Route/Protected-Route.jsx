import React, { useContext, useEffect, useState } from 'react'
import Style from './Protected-Route.module.css'
import { userContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {

  const { token } = useContext(userContext);

  if (token) {
    return children;
  }

  else {
    return <Navigate to={'/login'}></Navigate>
  }

}

