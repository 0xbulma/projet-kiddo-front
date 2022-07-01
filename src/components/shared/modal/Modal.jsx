import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ open, onClose, composant }) => {
  if (!open) return null;
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal">
          <div> {composant}</div>
          <button onClick={onClose}>Close modal</button>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
