import React, { useState } from "react";
import { createPortal } from "react-dom";
import LandingPage from "../pages/LandingPage";

const Modal = ({ children }) => {
  const width = screen.width;

  if (width < 768) {
    return <>{children}</>;
  }

  return (
    <>
      <LandingPage />
      {createPortal(
        <div className="fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-blue-wash">
          {children}
        </div>,
        document.querySelector("#portal"),
      )}
    </>
  );
};

export default Modal;
