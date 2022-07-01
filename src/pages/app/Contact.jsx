import React, { useState } from "react";
import Register from "../../components/app/register/Register";
import ModalBackdrop from "../../components/shared/modal/ModalBackdrop";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        Contact
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          open modal
        </button>
        <ModalBackdrop
          composant={<Register />}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
}
