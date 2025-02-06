import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Jobs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Add Job
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 font-bold hover:bg-black hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
