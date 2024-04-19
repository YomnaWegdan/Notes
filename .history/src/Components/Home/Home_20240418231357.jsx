import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from "formik";
import axios from "axios";
import { useRecoilState } from "recoil";
import { noteState } from "../Atoms/NoteAtom";

export default function Home() {
  let [noteLenth , setNoteLenth]= useRecoilState(noteState);
  const[allNotes , setAllNotes] =useState()

  //model
  const [show, setShow] = useState(false);
  const[addNotes , setAddNotes] =useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getUserNotes()
  },[])

  let formik = useFormik({
    initialValues:{
      title:'',
      content:''
    },onSubmit:addNote
  })
  function addNote(values){
    console.log(values)
    axios.post(`https://note-sigma-black.vercel.app/api/v1/notes`, values,{
      headers:{
        token:`3b8ny__${localStorage.getItem('userToken')}`
      }
    }).then((res)=>{
      console.log(res)
      setAddNotes(res.data.note)
      st
    }).catch((error)=> console.log(error)).finally(()=>handleClose())
  }

  function getUserNotes(){
    axios.get(`https://note-sigma-black.vercel.app/api/v1/notes`, {
      headers:{
        token:`3b8ny__${localStorage.getItem('userToken')}`
      }
    }).then((res)=>{
      console.log(res)
      setAddNotes(res.data.note)
      setNoteLenth(res.data.notes.length)
    }).catch((error)=> console.log(error))

  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
        <input onChange={formik.handleChange} type="text" name="title" id="title" className=" form-control my-3" placeholder="Please Enter Title"/>
        <textarea onChange={formik.handleChange} name="content" id="content" className=" form-control my-3" placeholder="Please Enter Content"></textarea>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formik.handleSubmit}>
            Add Note
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="overflow-hidden">
        <div className="row">
          <div className="col-2">
            <div className="position-fixed col-lg-2">
              <Sidebar />
            </div>
          </div>

          <div className="col-10 px-lg-5 px-2 py-5">
            <div className="text-end me-2">
              <Button variant="primary" onClick={handleShow} className="btn btn-info text-white">
                <i className="fa-solid fa-plus"></i> Add Note
              </Button>
            </div>
            <div className="row "></div>
          </div>
        </div>
      </div>
    </>
  );
}







/*
Recoil react => like context
Recoil better than Context
can wrap application by recoil through     <RecoilRoot>
Recoil => consist of atoms  atom for user , atom for cart , ... (such context for user , context for cart , ...)
*/