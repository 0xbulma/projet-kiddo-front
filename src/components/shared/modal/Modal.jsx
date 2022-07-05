import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ open, onClose, composant }) => {
  if (!open) return null;
  return (
    <>
      {ReactDOM.createPortal(
        <section className="modal-container">
          <div className="modal">
            <div> {composant}</div>
            <div className="modal-right"></div>
            <button className="close-modal" onClick={onClose}>
              Close modal
            </button>
          </div>
        </section>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
