import React from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
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
