import React, { Fragment,  useEffect, useState} from "react";




const ProductList = () => {
  const [products, setProducts] = useState([]);

const getProduct = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    const jsonData = await response.json();

    setProducts(jsonData);
  }catch(err){
    console.log(err.message);
  }
}

 useEffect(() => {
getProduct();

    }, []);
    
console.log(products);

    return (
<Fragment>
  {" "}
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



        {products.map((product) => {
          return(
          <tr key={product.id}>
     
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
       
        </tbody>
    </table>
    </Fragment>
  
 

    )
}



export default ProductList;