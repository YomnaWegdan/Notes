import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { noteState } from '../Atoms/NoteAtom'


export default function Layout() {
  useRecoilState(noteState)
  return (
    <>
    <div style={{backgroundColor:"#0DCAF0"}} className='w-100 p-2 text-white text-center fixed-top '>Notes App :  </div>
    <Outlet/>
    </>
  )
}
