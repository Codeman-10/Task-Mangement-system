import React, { useState } from "react";

function BasicModal({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose(); // Call the onClose prop if provided
    }
  };

  if (!isOpen) {
    return null; // Don't render the modal if it's closed
  }

  return (
    <div className="basic-modal">
      <div className="content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default BasicModal;
