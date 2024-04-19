import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  use
  return (
    <>
    <div style={{backgroundColor:"#0DCAF0"}} className='w-100 p-2 text-white text-center fixed-top '>Notes App :  </div>
    <Outlet/>
    </>
  )
}
