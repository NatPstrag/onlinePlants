import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

      const addProducts = (product) => {
        setProducts([...products,product]);
      }
      const deleteProd= (productid) => {
  setProducts(products.filter(product => product.productid !== productid))
}
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        deleteProd,
        addProducts,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};