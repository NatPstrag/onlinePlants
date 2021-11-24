import React, { useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import { ProductsContext } from "../context/ProductsContext";


const ProductList = (props) => {
 
const{products, setProducts} = useContext(ProductsContext);


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
       


     const handleDelete =  (productid) => {
    try {
     console.log("ID:" ,productid)
    } catch (err) {
      console.error(err.message);
    }
  };

return(
 <div className="list-group">
    <table className="table table-hover table-dark">
      <thead>
        <tr className="bg-secondary">
            <th scope="col">ID</th>
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
        {products && products.map((product) => {
          return(
            <tr key={product.productid}>
                <td>{product.productid}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.description}</td>
                <td>{product.images}</td>
                <td><button onClick={() => handleDelete(product.productID)} className="btn btn-danger">Delete</button></td>
                <td><button className="btn btn-primary">Update</button></td>
            </tr>
          )
})}
       </tbody> 
        </table>
   </div>
        );
    }
 export default ProductList;