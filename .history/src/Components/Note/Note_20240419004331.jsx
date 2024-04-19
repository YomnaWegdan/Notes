import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
// import "./Note.scss";
import { Card, CloseButton } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Note({note}) {

  
  //model
  const [show, setShow] = useState(false);
  const[updateNotes , setUpdateNotes] =useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let formik = useFormik({
    initialValues:{
      title:'',
      content:''
    },onSubmit:updateNote
  })

  function updateNote(values){
    console.log(values)
    axios.put(`https://note-sigma-black.vercel.app/api/v1/notes/${note._id}` , values , {
      headers:{
        token:`3b8ny__${localStorage.getItem('userToken')}`
      }
    }).then((res)=>{console.log(res)
      

    }
  
  ).catch((err)=> console.log(err)).finally(()=> handleClose())

  }

  return (
    <>
    <div className="col-lg-6 col-md-12 ">
    <Card className=" shadow border-0">
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>
        {note.content}
      </Card.Text>
      <div className=" d-flex justify-content-between">
      <i variant="primary" onClick={handleShow} className=" fa-solid fa-pen-to-square"></i>
      <i className=" fa-solid fa-trash"></i>
      </div>
    </Card.Body>
  </Card>
  </div>


  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Update Note</Modal.Title>
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
      Update Note
    </Button>
  </Modal.Footer>
</Modal>
    </>
  );
}

