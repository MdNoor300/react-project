import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";


const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullTitle, setShowFullTitle] = useState(false);

  // Handle truncation for the title
  let title = job.title;
  if (!showFullTitle && title.length > 20) {
    title = title.substring(0, 20) + "...";
  }

  // Handle truncation for the description
  let description = job.description;
  if (!showFullDescription && description.length > 90) {
    description = description.substring(0, 85) + "...";
  }

  return (
    <div
      key={job.id}
      className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 flex flex-col h-full"
    >
      <div className="flex-grow">
        <p className="text-gray-600 text-sm">{job.type}</p>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-600 mb-5 hover:text-indigo-800"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <p className="text-blue-600 font-semibold mt-2">{job.salary}</p>
        <p className="text-red-500 mt-1">
        <IoLocationOutline className="inline text-lg mb-1 mr-1" />
          {job.location}</p>
      </div>

      <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">
        Read More
      </button>
    </div>
  );
};

export default JobListing;
