import React, {useState, createContext} from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
const [product, setProducts] = useState([]);


    return (
        <ProductsContext.Provider value={{product, setProducts}}>
           
           {props.children}
        </ProductsContext.Provider>
    )
}


