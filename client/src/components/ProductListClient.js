

import React, { useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import {ProductsContext} from "../context/ProductsContext"
import classes from "./AddProduct.module.css"
import { useNavigate } from "react-router";



const ProductListClient = (props) => {
const{products, setProducts} = useContext(ProductsContext);

 let navigate = useNavigate();

const handleProductSelect = (productid) => {
  navigate(`/products/${productid}`)
}

useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await ProductFinder.get("/");
                console.log(response.data.data);
                setProducts(response.data.data.products);
            }catch(err){}
        };
        fetchData();
      }, []);

    


return(
<div className={classes.center}>
 <div className="list-group">
    <table align="center">
      <thead>
        <tr className="bg-secondary">
 
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Images</th>
  
        </tr>
      </thead>
<tbody>
  {products && products.map((product) => {
    return(
      <tr 
      onClick={() => handleProductSelect(product.productid)} 
      key={product.productid}>
    
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.images}</td>



      </tr>
    )})}
  </tbody> 
</table>
   </div>
   </div>
);}
 export default ProductListClient;