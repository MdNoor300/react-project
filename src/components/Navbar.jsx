import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white block px-4 py-2 rounded-md font-bold hover:bg-black hover:text-white transition duration-300"
      : "block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-white transition duration-300";

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" className={linkClass}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-job" className={linkClass}>
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
