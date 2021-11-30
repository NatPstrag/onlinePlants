

import React, { useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import {ProductsContext} from "../context/ProductsContext"
import { useNavigate } from "react-router";
import {Card, Button} from 'react-bootstrap'
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

{/* <Card className={classes.card}>
  <Card.Img variant="top" className={classes.imgBOX} src={product.images} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
 {product.description}
 <td>
   {product.price}
   </td>
 
    </Card.Text>
    <Button variant="primary">Koszyk</Button>
    <Button variant="primary">ulubione</Button>
  </Card.Body>
</Card> */}


 
<div className={classes.wrapper}>
<div className={classes.card}>
  <div className="card__body">
    <img src={product.images} className={classes.image}/>
      <h2 className={classes.title}>{product.name}</h2>
      <p className="card__description">{product.description}</p>
  </div>
  <button className="card__btn">koszyk</button>
</div>
</div>


</div>


    )})}

</div>




);}
 export default ProductListClient;