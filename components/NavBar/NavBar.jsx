import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsArrowBarUp, BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, Profile, Notification, SideBar, HelpCenter } from "./index";
import { Button } from "../componentsindex";
import images from "../../img";
import { TiArrowSortedDown } from "react-icons/ti";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  // FUNCTIONS
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);
    } else {
      setProfile(true);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className="navbar w-full flex justify-center outline outline-1 outline-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-4xl text-slate-300  ">
      <div className="navbar-container min-w-[480px] w-[1200px] h-[80px] flex justify-between items-center mx-[60px] py-[40px]">
        {/* LEFT SECTION START */}
        <div className="navbar-container-left flex  items-center  gap-8 md:gap-12 ">
          <div className="logo flex items-center">
            <Image
              src={images.logoLight}
              alt="MintMagnet"
              width={130}
              height={130}
              className="image-logo"
            />
          </div>
          <div className="navbar-container-left-box-input-box border border-slate-700 text-md  flex justify-between items-center py-2 px-4 box-border rounded-2xl ">
            <input
              type="text"
              placeholder="Search Items"
              className="navbar-container-left-box-input max-w-[320px] bg-transparent focus:outline-none"
            />
            <BsSearch onclick={() => {}} className="search-icon" />
          </div>
        </div>
        {/* LEFT SECTION END */}

        {/* RIGHT SECTION START */}
        <div className="navbar-container-right hidden lg:flex justify-evenly items-center gap-8 ">
          {/* DISCOVER MENU */}
          <div className="navbar-container-right-discover ">
            <div className="navbar-container-right-discover-menu-heading-wrapper flex items-center transition-colors duration-300 hover:bg-slate-800 p-2 px-4 rounded-full hover:cursor-pointer">
              <p onClick={(e) => openMenu(e)} className="font-sans">
                Discover
              </p>
              <TiArrowSortedDown />
            </div>
            {discover && (
              <div className="navbar-container-right-discover-box">
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className="navbar-container-right-help">
            <div className="navbar-container-right-help-menu-wrapper flex items-center transition-colors duration-300 hover:bg-slate-800 p-2 px-4 rounded-full hover:cursor-pointer ">
              <p onClick={(e) => openMenu(e)}>Help Center</p>
              <TiArrowSortedDown />
            </div>
            {help && (
              <div className="navbar-container-right-help-box">
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION MENU */}
          <div className="navbar-container-right-notify  transition-colors duration-300 hover:bg-slate-800 p-2  rounded-full hover:cursor-pointer">
            <MdNotifications
              className="notify"
              size={28}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          {/* CREATE BUTTON SECTION */}
          <div className="navbar-container-right-button">
            <Button btnText="Create" />
          </div>
          {/* USER PROFILE */}
          <div className="navbar-container-right-profile-box ">
            <div className="navbar-container-right-profile ">
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className="navbar-container-right-profile rounded-full float-center"
              />
            </div>
            {profile && <Profile />}
          </div>
        </div>
        {/* RIGHT SECTION END */}
        {/* MOBILE VIEW MENU BUTTON */}
        <div className="navbar-container-right-menu-button  lg:hidden ">
          <CgMenuRight className="menu-icon" onClick={() => openSideBar()} />
        </div>
      </div>

      {/* SIDEBAR */}
      {openSideMenu && (
        <div className="sidebar">
          <SideBar setOpenSideMenu={setOpenSideMenu} />c
        </div>
      )}
    </div>
  );
};

export default NavBar;