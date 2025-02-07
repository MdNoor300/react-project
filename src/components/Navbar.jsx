import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/add-job"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Add Job
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
