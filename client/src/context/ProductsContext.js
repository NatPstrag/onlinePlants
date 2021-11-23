import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProducts] = useState(null);


  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,

        selectedProduct,
        setSelectedProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};