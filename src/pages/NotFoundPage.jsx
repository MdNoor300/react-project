import { Link } from "react-router-dom";
import {FaExclamationTriangle} from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <FaExclamationTriangle className="text-red-600 text-6xl mb-4"/>
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
