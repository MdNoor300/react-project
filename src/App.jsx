import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCards/>
      <JobListing/>
      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white mt-10">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
