import React from "react";
// import "./Note.scss";
import { Card } from "react-bootstrap";

export default function Note({note}) {
  return (
    <>
    <div className="col-lg-6 col-md-12 ">
    <Card className=" shadow border-0">
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>
        {note.content}
      </Card.Text>
      <div>
      <i className=" fa-solid fa-pen-to-square"></i>
      <i className=" fa-solid fa-trash"></i>
      </div>
    </Card.Body>
  </Card>
  </div>
    </>
  );
}

