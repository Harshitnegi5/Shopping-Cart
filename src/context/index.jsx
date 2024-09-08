import { createContext, useEffect, useState } from "react";

export const shoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listofProducts, setListofProducts] = useState([]);

  const fetchListofProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        if(data && data?.products){
            setListofProducts(data?.products)
        }
        else{
            setListofProducts([])
        }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchListofProducts();
  }, []);

  return (
    <shoppingCartContext.Provider value={{listofProducts}}>
      {children}
    </shoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
