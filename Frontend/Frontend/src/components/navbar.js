import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { navLinks } from "../data/navlinks";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/UserSlice";
import GetUser from "../service/getUser";
import { logout } from "../redux/UserSlice";
import { useDispatch } from "react-redux";
import { mainIcon } from "../data/logo";
import BurgerMenu from "../assets/BurgerMenu.png";
import BurgerMenuClose from "../assets/BurgerMenuClose.png";
import useTheme from "../service/useTheme";

function handleLogout() {
  window.location.reload(false);
}

export default function NavBar() {
  const [currUser, setCurrUser] = useState(null);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const user = useSelector(selectUser);
  const userName =
    user.user && user.user.userName ? user.user.userName : "Guest";

  const dispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    window.location.href = "/";
  };

  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const displayTextOnHover = () => {
    if (userName === "Guest") {
      return "Login";
    } else {
      return "Logout";
    }
  };

  return (
    <nav className="shadow-md w-full relative">
      <div
        className={`flex items-center justify-between bg-white py-4 pl-10 ${
          currUser === "Guest" ? "pr-10" : "pr-5"
        }`}
      >
        <div className="flex items-center">
          {mainIcon.map((main) => (
            <Link to={main.link} className="flex cursor-pointer items-center">
              <img
                src={main.icon}
                alt={main.alt}
                className="w-[40px] h-[38px]"
              />
              <span className="ml-2 text-xl font-bold">{main.name}</span>
            </Link>
          ))}
        </div>

        <div
          onClick={() => setBurgerOpen(!burgerOpen)}
          className="z-10 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img
            src={burgerOpen ? BurgerMenuClose : BurgerMenu}
            alt="BurgerMenu"
            className="h-[35px] w-[35px]"
          />
        </div>

        {burgerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-20"
            onClick={() => setBurgerOpen(false)}
          ></div>
        )}

        <ul
          className={`md:flex md:pr-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 right-0 w-full md:w-auto md:pl-0 px-10 transition-all duration-500 ease-in ${
            burgerOpen ? "top-20" : "top-[-490px]"
          }`}
          style={{ zIndex: burgerOpen ? 30 : "auto" }}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="md:mx-8 md:my-0 my-8">
              <Link
                to={link.link}
                className={`md:text-gray-800 text-neutral-200  hover:text-gray-400 duration-500 ${
                  isLinkActive(link.link) ? "underline" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative group flex justify-center">
          <div className={`group-hover:opacity-0 `}>Welcome, {userName}</div>
          {userName === "Guest" ? (
            <Link
              to="/login"
              className={`absolute opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer visible`}
            >
              {displayTextOnHover()}
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className={`absolute opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer visible`}
            >
              {displayTextOnHover()}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
