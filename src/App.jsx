import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero 
      title="Welcome to Our Website" 
        subtitle="Your one-stop solution for amazing content" 
      />

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-gray-600 mt-2">Description of feature 1.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">Feature 2</h3>
            <p className="text-gray-600 mt-2">Description of feature 2.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">Feature 3</h3>
            <p className="text-gray-600 mt-2">Description of feature 3.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white mt-10">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
