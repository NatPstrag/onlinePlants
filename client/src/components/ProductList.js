import React, {useContext, useEffect} from "react";
import ProductFinder from "../apis/ProductFinder";
import { ProductsContext } from "../context/ProductContext";


const ProductList = (props) => {
  const{products, setProducts} = useContext(ProductsContext)
 useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await ProductFinder.get("/")
    setProducts(response.data.data.product)
      }catch(err) {}
    };
      
    fetchData();
    }, [])

    return (
  <div className="list-group">
    <table className="table table-hover table-dark">
      <thead>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Price</th>
               <th>Units in stock</th>
               <th>description</th>
               <th>Images</th>
              <th>Delete</th>
               <th>Edit</th>
            </tr>
      </thead>
      
      <tbody>
        {products && products.map((product) => {
          return(
          <tr key={product.id}>
            <td>{product.productID}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.unitsInStock}</td>
            <td>{product.description}</td>
            <td>{product.images}</td>
            <td><button className="btn btn-danger">Delete</button></td>
            <td><button className="btn btn-primary">Update</button></td>

            </tr>
          );
        })}
        {/* <tr>
              <td>1</td>
            <td>maranta</td>
              <td>29.99</td>
             <td>27</td>
              <td><button className="btn btn-danger">Delete</button></td>
            <td><button className="btn btn-primary">Update</button></td>
            </tr> */}
        </tbody>
    </table>
  </div>
 

    )
}



export default ProductList;