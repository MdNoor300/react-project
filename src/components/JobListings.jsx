import JobListing from "./JobListing";
import jobs from "../jobs.json";

const JobListings = () => {
    const recentJobs = jobs.slice(0,3);

  return (
    <div className="p-6 max-w-[1320px] mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
        Browse Jobs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {recentJobs .map((job) => (
          <JobListing key={job.id} job = {job}/>
        ))}
      </div>
    </div>
  )
}

export default JobListings