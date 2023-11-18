import React, {useState} from "react";
import { createPortal } from "react-dom";
import LandingPage from "../pages/LandingPage";

const Modal = ({ children }) => {
  const [openModal, setOpenModal] = useState(true);
  let width = screen.width;

  if(width < 768) {
    return (
      <>
        {children}
      </>
    )
  }

  const closeModal = () => {
    setOpenModal(false);
  };
    
  return createPortal(
    <div className="fixed top-0 left-0 z-[999] flex w-full h-screen items-center justify-center bg-blue-wash">
      {children}
    </div>,
    document.querySelector("#portal"),
  );
};

export default Modal;
