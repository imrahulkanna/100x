import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import logo100x from '../assets/100x.svg'

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col justify-center bg-black font-inter text-twitter-neutral-50 lg:flex-row lg:items-center lg:gap-26">
      {/* Logo */}
      <header className="absolute top-0 left-1/2 -translate-x-1/2 flex items-end justify-center px-4 py-3 lg:static lg:p-0 lg:translate-x-0">
        <img src={logo100x} alt="100x-logo" className="lg:w-[593] lg:h-[199px]" />
      </header>

      {/* Sign in */}
      <main className="flex flex-col items-start gap-10 px-7">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="text-3.25xl font-extrabold leading-normal lg:text-5xl lg:font-bold">
            Happening now
          </p>
          <p className="text-base font-medium leading-normal lg:text-2.5xl lg:font-bold">
            Join today.
          </p>
        </div>
        {/* <button
          onClick={() => navigate("/signup")}
          className="flex w-full items-center justify-center rounded-signup-radius bg-twitter-neutral-50 px-6 py-2 font-bold leading-normal text-black shadow-signup backdrop-blur-xl-1 hover:bg-twitter-neutral-200"
        >
          Create account
        </button> */}
        <Button
          variant="solid"
          text="Create account"
          modal="login"
          color="secondary"
          onClick={() => navigate("/signup")}
        />
        <div className="flex w-full items-center justify-center gap-1 self-stretch">
          <div className="h-px w-full bg-neutral-700" />
          <p>or</p>
          <div className="h-px w-full bg-neutral-700" />
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <p className="text-base-1 font-normal leading-normal lg:text-xl">
            Already have an account?
          </p>

          {/* <button
            onClick={() => navigate("/home")}
            className="flex w-full items-center justify-center rounded-signup-radius border border-stroke px-6 py-2 text-base font-bold leading-normal text-twitter-blue shadow-signup backdrop-blur-xl-1"
          >
            Sign in
          </button> */}
          <Button
            variant="outline"
            text="Sign in"
            onClick={() => navigate("/home")}
          />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
