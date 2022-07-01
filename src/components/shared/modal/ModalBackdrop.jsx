import React from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

const ModalBackdrop = ({ composant, open, onClose }) => {
  return (
    <>
      <Modal composant={composant} open={open} onClose={onClose} />
      <BackDrop open={open} onClose={onClose} />
    </>
  );
};

export default ModalBackdrop;
