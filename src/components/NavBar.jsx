import { Link } from "react-router-dom";
import menuIcon from "../assets/hamburger-icon.svg";
import close from "../assets/close_hover.png";
import { useState } from "react";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-between md:p-10 p-4 items-center">
      <div className="text-3xl font-bold">Mednova Ai</div>
      <div className="md:block hidden">
        <ul className="flex items-center gap-4">
          <li>Features</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="">
        <button className="border-5 rounded-sm border-gray-600 p-4 md:block hidden">
          <Link to={"/login"}>Login/Signup</Link>
        </button>
        <button
          className="border-2 rounded-sm border-gray-200 p-4 md:hidden block"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <img src={menuIcon} alt="menu" />
        </button>
      </div>
      {/* mobile menu */}
      {showMenu && (
        <div className="w-2/3 flex flex-col h-screen fixed z-10 top-0 right-0 bg-gray-900 p-6">
          <button
            className="border-2 rounded-sm border-gray-200 p-2 self-start w-max"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <img src={close} alt="menu" />
          </button>
          <ul className="flex flex-col items-center gap-10 mt-10">
            <li>Features</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <button className="border-2 rounded-sm border-gray-500 p-2 text-sm">
              <Link to={"/login"}>Login/Signup</Link>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};
export default NavBar;
