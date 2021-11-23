import React, { useEffect, useState} from "react";
import axios from "axios";


const ProductList = () => {
 
const[products, setProducts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/products')
        .then(res => {
            console.log(res)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])



     const handleDelete =  (productid) => {
    try {
     console.log("ID:" ,productid)
    } catch (err) {
      console.error(err.message);
    }
  };

return(
 
    <table className="table table-hover table-dark">
      <thead>
        <tr className="bg-secondary">
 
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Units in stock</th>
            <th scope="col">description</th>
            <th scope="col">Images</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
        </tr>
      </thead>
    <tbody>
        {products.map((product) => (
            <tr key={product.productid}>
            
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.description}</td>
                <td>{product.images}</td>
                <td><button onClick={() => handleDelete(product.productID)} className="btn btn-danger">Delete</button></td>
                <td><button className="btn btn-primary">Update</button></td>
            </tr>
          ))}
       </tbody> 
        </table>
   
        );
    };
 export default ProductList;