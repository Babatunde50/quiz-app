import React from "react";

import "./Modal.styles.css";

export default ({ handleClose, children }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={handleClose}></div>
      <div className="modal">
        {children}
      </div>
    </>
  );
};
