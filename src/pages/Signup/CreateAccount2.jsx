import React from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../../components/Signup/SignupHeader";
import Fieldset from "../../components/Fieldset";
import Input from "../../components/Input";
import Img from "../../components/Img";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useAuth } from "../../context/AuthContext";
import correctImg from "../../assets/correct.svg";

function CreateAccount2() {
  const navigate = useNavigate();
  const { userCred } = useAuth();
  let dob = userCred["Year"]
    ? userCred["Month"].slice(0, 3) +
      " " +
      userCred["Day"] +
      ", " +
      userCred["Year"]
    : "";

  function handleClick() {
    navigate(-1);
  }

  return (
    <Modal>
      <div className="flex h-screen flex-shrink-0 flex-col items-start justify-between bg-black px-[15px] pb-5 font-inter text-twitter-neutral-50 md:z-[1000] md:h-[548px] md:w-[512px] md:rounded-2xl md:py-5">
        <section className="flex flex-col items-start gap-3 self-stretch">
          {/* Header */}
          <SignupHeader step={2} />

          {/* Create Account Form*/}
          <main className="flex flex-col items-start gap-5 self-stretch md:px-7">
            <h1 className="text-2xl font-bold leading-normal">
              Create your account
            </h1>
            <form className="flex flex-col items-start gap-8 self-stretch">
              {/* Name Fieldset */}
              <Fieldset type={"Name"}>
                <Input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={userCred["Name"]}
                  onClick={handleClick}
                />
                <Img imgPath={correctImg} imgAlt="correct-icon" />
              </Fieldset>

              {/* Email Fieldset */}
              <Fieldset type={"Email"}>
                <Input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  value={userCred["Email"]}
                  onClick={handleClick}
                />
                <Img imgPath={correctImg} imgAlt="correct-icon" />
              </Fieldset>

              {/* Date of Birth */}
              <Fieldset type={"Date of birth"}>
                <Input
                  type="text"
                  name="Date of birth"
                  placeholder="Date of birth"
                  value={dob}
                  onClick={handleClick}
                />
                <Img imgPath={correctImg} imgAlt="correct-icon" />
              </Fieldset>
            </form>
          </main>
        </section>

        {/* Create Account Button*/}
        <section className="self-stretch md:px-5">
          {/* <button
          className="flex w-full items-center justify-center self-stretch rounded-signup-radius bg-twitter-blue px-6 py-3 font-bold leading-normal text-twitter-neutral-50 shadow-signup backdrop-blur-xl-1 hover:bg-twitter-blue-hover"
          onClick={() => navigate("/signup3")}
        >
          Sign up
        </button> */}
          <Button
            variant="solid"
            text="Sign up"
            color="primary"
            onClick={() => navigate("/signup3")}
          />
        </section>
      </div>
    </Modal>
  );
}

export default CreateAccount2;
