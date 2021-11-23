import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProducts] = useState(null);

      const addProducts = (product) => {
        setProducts([...products,product]);
      }
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        addProducts,
        selectedProduct,
        setSelectedProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};