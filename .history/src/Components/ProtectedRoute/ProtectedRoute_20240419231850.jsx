import  React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    let navigate = useNavigate()
    useEffect(()=>{
        console.log(localStorage.getItem('userToken'))
        if(localStorage.getItem('userToken')){
            navigate('/home')
        }
    },[])

  return children
    
  
}
