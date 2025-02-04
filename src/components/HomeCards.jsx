import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-16 px-6 max-w-[1320px] mx-auto">
      <h2 className="text-3xl font-bold text-center">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
        <Card>
          <h3 className="text-xl font-bold">Feature 1</h3>
          <p className="text-gray-600 mt-2">Description of feature 1.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold">Feature 2</h3>
          <p className="text-gray-600 mt-2">Description of feature 2.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold">Feature 3</h3>
          <p className="text-gray-600 mt-2">Description of feature 3.</p>
        </Card> 
      </div>
    </section>
  );
};

export default HomeCards;
