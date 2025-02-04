const Hero = ({title="Welcome to Our Website", subtitle="Your one-stop solution for amazing content"}) => {
    return (
      <section className="text-center py-20 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">
          {subtitle}
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </section>
    );
  };
  
  export default Hero;
  