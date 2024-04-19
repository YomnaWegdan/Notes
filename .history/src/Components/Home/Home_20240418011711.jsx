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
    
      <div className="overflow-hidden">
        <div className="row">
          <div className="col-2">
            <div className="position-fixed col-lg-2">
              <Sidebar />
            </div>
          </div>

          <div className="col-10 px-lg-5 px-2 py-5">
            <div className="text-end me-2">
              <button className="btn btn-info text-white">
                <i className="fa-solid fa-plus"></i> Add Note
              </button>
            </div>
            <div className="row "></div>
          </div>
        </div>
      </div>
    </>
  );
}
