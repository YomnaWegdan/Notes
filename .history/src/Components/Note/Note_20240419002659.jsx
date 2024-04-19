import React, { useState } from "react";
// import "./Note.scss";
import { Card } from "react-bootstrap";

export default function Note({note}) {

  
  //model
  const [show, setShow] = useState(false);
  const[addNotes , setAddNotes] =useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    </>
  );
}

