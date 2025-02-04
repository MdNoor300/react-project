import jobs from "../jobs.json";
const JobListing = () => {
  return (
    <div className=" p-6 max-w-[1320px] mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
        Browse Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mb-8">
          <p className="text-gray-600 text-sm">Full-Time</p>
          <h3 className="text-lg font-bold mt-1">Senior React Developer</h3>
          <p className="text-gray-700 mt-2">
            We are seeking a talented Front-End Developer to join our team in
            Boston, MA. The ideal candidate will have strong skills in HTML,
            CSS, and JavaScript...
          </p>
          <p className="text-blue-600 font-semibold mt-2">$70 - $80K / Year</p>
          <p className="text-red-500 mt-1">Boston, MA</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mb-8">
          <p className="text-gray-600 text-sm">Remote</p>
          <h3 className="text-lg font-bold mt-1">Front-End Engineer (React)</h3>
          <p className="text-gray-700 mt-2">
            `` Looking for a React Engineer to build scalable UI components...
          </p>
          <p className="text-blue-600 font-semibold mt-2">$60 - $75K / Year</p>
          <p className="text-red-500 mt-1">Work from Anywhere</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mb-8">
          <p className="text-gray-600 text-sm">Full-Time</p>
          <h3 className="text-lg font-bold mt-1">Senior React Developer</h3>
          <p className="text-gray-700 mt-2">
            We are seeking a talented Front-End Developer to join our team in
            Boston, MA. The ideal candidate will have strong skills in HTML,
            CSS, and JavaScript...
          </p>
          <p className="text-blue-600 font-semibold mt-2">$70 - $80K / Year</p>
          <p className="text-red-500 mt-1">Boston, MA</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
