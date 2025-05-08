'use client'

import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
      if(!isAuthenticated) {
        redirect('/');
      }
    }, [isAuthenticated]);

    if(!isAuthenticated) return null;
    
  return (
    <>{children}</>
  )
}

export default ProtectedRoutes