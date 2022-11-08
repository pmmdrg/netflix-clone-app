import { React, useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsNoneIcon className="icon" />
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
