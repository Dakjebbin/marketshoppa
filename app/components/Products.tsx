import ProductsList from "./ProductsList";

const Products = () => {
 

  return (
    <section className="mt-17 w-[94%] m-auto">
      <div>
        <h1 className="text-3xl font-bold mb-4">Market Fresh Favorites</h1>
        <p className="md:text-lg text-base text-gray-700">
          A glimpse of what&apos;s currently in season and ready for your
          shopping list.
        </p>
      </div>
      <div className=" flex justify-end my-6 ">
        <button className="border-2 rounded-4xl border-[#3ea40b] text-nowrap md:text-base text-sm  text-[#3ea40b] font-semibold md:px-4 px-3 py-2 ">
          View All Categories
        </button>
      </div>

      <ProductsList limit={3}/>

    </section>
  );
};

export default Products;
