import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "./Img";
import Button from "./Button";
import logo100x from "../assets/100x.svg";
import homeSelected from "../assets/home-selected.svg";
import home from "../assets/home.svg";
import profileSelected from "../assets/profile-selected.svg";
import profile from "../assets/profile.svg";
import userDP from "../assets/rahul.jpg";
import groupIcon from "../assets/group.svg";

const SideNavBar = () => {
  const [activePage, setActivePage] = useState("home");

  const homeIcon = activePage === "home" ? homeSelected : home;

  const profileIcon = activePage === "profile" ? profileSelected : profile;

  const homeFontWeigth = activePage === "home" ? "font-medium" : "font-normal";

  const profileFontWeigth =
    activePage === "profile" ? "font-medium" : "font-normal";

  const openHomePage = () => {
    setActivePage("home");
  };

  const openProfilePage = () => {
    setActivePage("profile");
  };

  return (
    <div className="inline-flex min-h-screen w-[280px] shrink-0 flex-col items-start justify-between border-r border-twitter-neutral-700 bg-black p-5 font-inter leading-normal text-twitter-neutral-50">
      <main className="flex w-full flex-col items-start">
        <div className="flex items-center self-stretch px-5 py-3">
          <Img imgPath={logo100x} imgAlt="100x-logo" />
        </div>
        <Link
          className="flex items-center gap-5 self-stretch px-5 py-3"
          onClick={openHomePage}
        >
          <Img imgPath={homeIcon} imgAlt="home-icon" style="w-6 h-6" />
          <p className={`text-xl ${homeFontWeigth} leading-normal`}>Home</p>
        </Link>
        <Link
          className="flex items-center gap-5 self-stretch px-5 py-3"
          onClick={openProfilePage}
        >
          <div className="flex h-6 w-6 items-center justify-center">
            <Img imgPath={profileIcon} imgAlt="profile-icon" />
          </div>
          <p className={`text-xl ${profileFontWeigth} leading-normal`}>
            Profile
          </p>
        </Link>
        <div className="flex flex-col items-start px-[10px] py-6">
          <Button variant="solid" text="Post" color="primary" />
        </div>
      </main>
      <footer className="flex items-center justify-between self-stretch">
        <div className="flex items-start gap-3">
          <Img
            imgPath={userDP}
            imgAlt="profile-img"
            style="w-10 h-10 rounded-[200px] bg-cover bg-no-repeat"
          />
          <div className="flex flex-col items-start">
            <p className="font-bold">Rahul Kanna</p>
            <p>@imrahulkanna</p>
          </div>
        </div>
        <div>
          <Img imgPath={groupIcon} imgAlt="group-icon" style="p-2" />
        </div>
      </footer>
    </div>
  );
};

export default SideNavBar;
