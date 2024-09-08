import React, { useContext } from 'react'
import { shoppingCartContext } from '../context';

const ProductList = () => {

  const { listofProducts } = useContext(shoppingCartContext);


  
  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20 '>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'></div>
      <div className='max-w-md mx-auto text-center bg-cyan-300'>
        <h2 className='text-3xl font-semibold font-[gilroy] text-gray-950 sm:text-4xl'>Our Featured Products</h2>
      </div>
    </section>
  )
}

export default ProductList;
