import React from "react";
// import "./Note.scss";
import { Card } from "react-bootstrap";

export default function Note({note}) {
  return (
    <>
    <div className="col-lg-3 col-md-2">
    <Card>
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        {note.content}
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card></div>
    </>
  );
}

