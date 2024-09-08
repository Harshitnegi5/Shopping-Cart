import React, { useContext } from "react";
import { shoppingCartContext } from "../context";
import { list } from "postcss";
import ProductTile from "../components/ProductTile";

const ProductList = () => {
  const { listofProducts } = useContext(shoppingCartContext);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <div className="max-w-md mx-auto text-center bg-cyan-300">
          <h2 className="text-3xl font-semibold font-[gilroy] text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 mt-10 gap-5 lg:grid-cols-4 lg:mt-16 lg:gap-8">
          {listofProducts && listofProducts.length > 0 ? (
            listofProducts.map((singleProduct) => <ProductTile />)
          ) : (
            <h3>No Porduct Found</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
