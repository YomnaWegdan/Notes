import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <input type="text" name="title" id="title" className=" form-control my-3"/>
        <textarea name="content" id="content" className=" form-control my-3"></textarea>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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
