import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import cancelIcon from "../../assets/cancel.svg";
import backIcon from "../../assets/back.svg";
import Img from "../Img";

function SignupHeader({ step, closeModal }) {
  const navigate = useNavigate();
  const { userCred, setUserCred } = useAuth();

  function handleImgClick() {
    const screenWidth = screen.width;
    if (screenWidth >= 1024) {
      closeModal();
    }

    if (step === 1) {
      const resetCred = {
        Name: "",
        Email: "",
        Month: "",
        Day: "",
        Year: "",
        "Date of birth": "",
        Password: "",
        "Verification code": "",
      };
      setUserCred(resetCred);
      navigate("/");
    } else {
      navigate(-1);
    }
  }
  return (
    <header className="flex items-center gap-5 self-stretch py-3 lg:px-4">
      <button onClick={handleImgClick}>
        {step === 1 ? (
          <Img imgPath={cancelIcon} imgAlt="cancel-icon" />
        ) : (
          <Img imgPath={backIcon} imgAlt="back-icon" />
        )}
      </button>
      <p className="text-base-1 font-bold leading-normal">Step {step} of 4</p>
    </header>
  );
}

export default SignupHeader;
