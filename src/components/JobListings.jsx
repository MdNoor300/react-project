import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      
      try {
        const res = await fetch("http://localhost:5000/jobs?_limit=3"); 
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6 max-w-[1320px] mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
        {isHome ? "Recent Jobs" : "All Jobs"}
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobListing key={job.id} job={job} />)
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No jobs available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListings;
