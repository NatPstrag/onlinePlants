

import React, { useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import {ProductsContext} from "../context/ProductsContext"
import { useNavigate } from "react-router";
import classes from './ProductListClient.module.css'



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




<div className = "container">
  <div className={classes.element}>
<div className={classes.wskcpproduct}> 
      {products && products.map((product) => {
    return(
  <div 
      onClick={() => handleProductSelect(product.productid)} 
      key={product.productid}>
<div class="div2">
    <div className={classes.flipcard}>
      <div className={classes.flipcardinner}>
        <div className={classes.flipcardfront}>
        <img src={product.images} className={classes.image}/>

        <div className={classes.t}>
          <div className={classes.c}>
                <span>{product.name}</span>
          </div>
      
     <div className={classes.line}></div>
          </div>


          <div className={classes.cardoverlay}></div>
            <div className={classes.cardcontent }>
                <h2>Description</h2>
                <p>{product.description}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)})}
</div>
</div>
</div>




);}
 export default ProductListClient;