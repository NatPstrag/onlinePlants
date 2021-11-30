

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
      {products && products.map((product) => {
    return(
      <div 
      onClick={() => handleProductSelect(product.productid)} 
      key={product.productid}>

  <div className={classes.flipcard}>
      <div className={classes.flipcardinner}>
        <div className={classes.flipcardfront}>
         <img src={product.images} className={classes.image}/>
        </div>
      </div>
    </div> 
    
    {/* <div className={classes.shell}>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className={classes.wskcpproduct}>
          <div className={classes.wskcpimg}>
          <img src={product.images} className={classes.image}/>
          </div>
          <div className={classes.wskcptext}>
            <div className="category">
              <span>{product.name}</span>
            </div>
            <div className={classes.titleproduct}>
              <h3>{product.name}</h3>
            </div>
            <div className={classes.descriptionprod}>
              <p>{product.description}</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">Rp500.000</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div> */}

</div>


    )})}

</div>




);}
 export default ProductListClient;