import { useParams, useLoaderData , useNavigate} from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";
import { toast } from "react-toastify";

const JobPage = ({deleteJob}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;
    deleteJob(jobId);

    toast.success("Job Deleted Successfully");

    navigate('/jobs');
  };

  if (!job) {
    return <Spinner />;
  }

  return (
    <>
      {/* Back to Jobs Link */}
      <section>
        <div className="max-w-[1320px] m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            {/* Job Main Content */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-black text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>

                <h3 className="text-black text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company}</h2>
                <p className="my-2">
                  A leading technology company specializing in AI and cloud
                  computing solutions.
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 text-[12px] lg:text-xl bg-indigo-100 p-2 font-bold">
                  {job.email}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.phone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full w-full mt-4 block"
                >
                  Edit Job
                </Link>
                <button onClick={ () => onDeleteClick(job.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
export { JobPage as default, jobLoader };
