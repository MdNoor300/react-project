import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-16 px-6 max-w-[1320px] mx-auto">
      <h2 className="text-3xl font-bold text-center">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card>
          <h3 className="text-xl font-bold">Feature 1</h3>
          <p className="text-gray-700 mt-2">Description of feature 1.</p>
          <Link
            to="/jobs"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            aria-label="Browse available jobs"
          >
            Browse Jobs
          </Link>
        </Card>
        <Card>
          <h3 className="text-xl font-bold">Feature 2</h3>
          <p className="text-gray-700 mt-2">Description of feature 2.</p>
          <Link
            to="/add-job"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            aria-label="Add a new job"
          >
            Add Job
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
