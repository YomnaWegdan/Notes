import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InverseProtectedRoute() {
    let navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            navigate('./home')
        }
    },[])

  return (
    {chi}
  )
}
