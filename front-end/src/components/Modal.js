import React, { useRef } from "react";

function Modal({  openModal, setOpenModal }) {
  const modalRef = useRef(null);

  const closeModal = () => {
    setOpenModal(false)
  };
  if(!openModal){
    return null
  }
  
  return (
    <div
      ref={modalRef}
      style={{
        position: "fixed",
        display: "flex",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "RGBA(0,0,0,0.71)",
        zIndex: 1,
      }}
      className="modal"
      
    >
      <div
        className="modal-text"
        style={{
          position: "absolute",
          display: "flex",
          zIndex: 1000,
          width: "40%",
          height: "45px",
          alignItems: "center",
          paddingLeft: "35px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          bottom: "400px",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <p data-testid="modal-text">Employee Created!</p>
        <span
          className="modal-btn-close"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#000",
            position: "absolute",
            right: "-10px",
            top: "-10px",
            borderRadius: "50%",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <strong onClick={() => closeModal()}>X</strong>
        </span>
      </div>
    </div>
  );
}

export default Modal;
