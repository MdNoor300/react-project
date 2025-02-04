import jobs from "../jobs.json";

const JobListing = () => {

    const recentJobs = jobs.slice(0, 3);

  return (
    <div className="p-6 max-w-[1320px] mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
        Browse Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {recentJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 flex flex-col h-full"
          >
            <div className="flex-grow">
              <p className="text-gray-600 text-sm">{job.type}</p>
              <h3 className="text-lg font-bold mt-1">{job.title}</h3>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <p className="text-blue-600 font-semibold mt-2">{job.salary}</p>
              <p className="text-red-500 mt-1">{job.location}</p>
            </div>
            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
