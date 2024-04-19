import  React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InverseProtectedRoute({children}) {
    let navigate = useNavigate()
    useEffect(()=>{
        console.log(object)(localStorage.getItem('userToken'))
        if(localStorage.getItem('userToken')){
            navigate('/home')
        }
    },[])

  return children
    
  
}
