import React from "react";
import "./Modal.css";

const Modal = props => (
  <div
    className={`modal ${props.display}`}
    id="Score"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="Score"
    aria-hidden="false"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Score
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => props.closeModal()}
            >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Current Score: {props.current}</p>
          <p>Highest Score: {props.highest}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={() => props.closeModal()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
