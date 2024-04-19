import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { noteState } from '../Atoms/NoteAtom'


export default function Layout() {
  //to can use the atom (noteState that i create it in NoteAtom.js) => use useRecoilState()
  let [noteLenth , setNoteLenth]= useRecoilState(noteState);
  return (
    <>
    <div  className=' bg-info w-100 p-2 text-white text-center fixed-top'>Notes App : {noteLenth
    } </div>
    <Outlet/>
    </>
  )
}
