import { useState } from "react";
import "../styles/modal.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(!sessionStorage.getItem("announcementSeen"));

  const handleClose = () => {
    sessionStorage.setItem("announcementSeen", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>⚠️ Uwaga</h2>
        <p>
          Z powodu natłoku pracy prosimy o kontakt osobisty. Zapraszamy do warsztatu przy
          ul. Bocheńskiego 17.
        </p>
        <button onClick={handleClose}>Rozumiem</button>
      </div>
    </div>
  );
}

export default Modal;
