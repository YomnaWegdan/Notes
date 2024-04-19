import React from "react";
// import "./Note.scss";
import { Card } from "react-bootstrap";

export default function Note({note}) {
  return (
    <>
    <div className="col-md-6 ">
    <Card className=" shadow-lg border-0">
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>
        {note.content}
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  </div>
    </>
  );
}

