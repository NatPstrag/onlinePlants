import React, { useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import {ProductsContext} from "../context/ProductsContext"
import { useNavigate} from "react-router-dom";
import classes from "./AddProduct.module.css"


const ProductList = (props) => {
const{products, setProducts} = useContext(ProductsContext);
 let history = useNavigate();

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

     function deleteProduct(productid)
    {
        if(window.confirm('Are you sure?'))
        {
            fetch('http://localhost:5000/products/'+productid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json',
        }})}
        window.location.reload();}


        const handleUpdate = (productid) =>{
          history(`/products/${productid}/update`)
        }
       
return(
<div className={classes.center}>
 <div className="list-group">
    <table align="center">
      <thead>
        <tr className="bg-secondary">
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          {/* <th scope="col">Description</th>
          <th scope="col">Images</th> */}
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
<tbody>
  {products && products.map((product) => {
    return(
      <tr key={product.productid}>
        <td>{product.productid}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        {/* <td>{product.description}</td>
        <td>{product.images}</td> */}
        <td><button 
        onClick={() => deleteProduct(product.productid)} 
        className="btn btn-danger">Delete</button></td>

        <td><button onClick={() => handleUpdate(product.productid)} className="btn btn-success">Update</button></td>
      </tr>
    )})}
  </tbody> 
</table>
   </div>
   </div>
);}
 export default ProductList;