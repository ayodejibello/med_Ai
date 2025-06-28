import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between p-10 items-center">
      <div className="text-3xl font-bold">Mednova Ai</div>
      <div>
        <ul className="flex items-center gap-4">
          <li>Features</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button className="border-5 rounded-sm border-gray-600 p-4">
          <Link to={"/login"}>Login/Signup</Link>
        </button>
      </div>
    </div>
  );
};
export default NavBar;
