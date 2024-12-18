import React, { useState } from "react";

const ToastContainer = () => {
  const [toast, setToast] = useState([]);
  const handleClose = (id) => {
    setToast((prevToasts) => {
      return prevToasts.filter((toasts) => {
        return toasts.id !== id;
      });
    });
  };
  const handleShow = (message, type) => {
    const id = Date.now();
    const newToast = [...toast, { id, message, type }];
    setToast(newToast);
    setTimeout(() => {
      handleClose(id);
    }, 5000);
  };
  return (
    <div className="container">
      <div className="toast-container">
        {toast.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>x</span>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button onClick={() => handleShow("Success", "success")}>
          Success
        </button>
        <button onClick={() => handleShow("Info", "info")}>Info</button>
        <button onClick={() => handleShow("Warning", "warning")}>
          Warning
        </button>
        <button onClick={() => handleShow("Error", "error")}>Error</button>
      </div>
    </div>
  );
};

export default ToastContainer;
