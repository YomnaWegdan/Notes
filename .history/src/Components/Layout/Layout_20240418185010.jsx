import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { noteState } from '../Atoms/NoteAtom'


export default function Layout() {
  //to can use the atom (noteState that i create it in NoteAtom.js) => use useRecoilState()
  let [] useRecoilState(noteState);
  return (
    <>
    <div style={{backgroundColor:"#0DCAF0"}} className='w-100 p-2 text-white text-center fixed-top'>Notes App :  </div>
    <Outlet/>
    </>
  )
}
