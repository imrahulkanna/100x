import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="fixed top-0 left-0 z-[999] flex w-full h-screen items-center justify-center bg-blue-wash">
      {children}
    </div>,
    document.querySelector("#portal"),
  );
};

export default Modal;
