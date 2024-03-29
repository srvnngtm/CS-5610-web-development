import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import {
  faBell,
  faBookmark,
  faEllipsis,
  faHashtag,
  faHouse,
  faList,
  faMessage,
  faUserPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    "home",
    "explore",
    "notifications",
    "messages",
    "bookmarks",
    "lists",
    // "profile",
    "more",
  ];
  const linkIcons = [
    faHouse,
    faHashtag,
    faBell,
    faMessage,
    faBookmark,
    faList,
    // faUser,
    faEllipsis,
  ];

  return (
    <div className="list-group ">
      {links.map((link, index) => (
        <Link
          to={`/tuiter/${link}`}
          className={`list-group-item  d-flex justify-content-start text-capitalize ${
            active === link ? "active" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={linkIcons[index]}
            style={{ paddingRight: "10px" }}
          />
          <label className=" d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
            {link}
          </label>
        </Link>
      ))}

      {!currentUser && (
        <Link
          className="list-group-item  d-flex justify-content-start text-capitalize"
          to="/tuiter/login"
        >
          {/* <FontAwesomeIcon
            icon="fa-user-plus"
            style="paddingRight: '10px' "
          /> */}
          <FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />

          <label className=" d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
            Login
          </label>
        </Link>
      )}

      {!currentUser && (
        <Link
          className="list-group-item  d-flex justify-content-start text-capitalize"
          to="/tuiter/register"
        >
          <FontAwesomeIcon icon={faUserPlus} style={{ paddingRight: "10px" }} />
          <label className=" d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
            Register
          </label>
        </Link>
      )}

      {currentUser && (
        <Link
          className="list-group-item  d-flex justify-content-start text-capitalize"
          to="/tuiter/profile"
        >
         <FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />

          <label className=" d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
            Profile
          </label>
        </Link>
      )}
    </div>
  );
};
export default NavigationSidebar;
