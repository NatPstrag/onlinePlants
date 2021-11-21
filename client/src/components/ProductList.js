import React from "react";







const ProductList = () => {
    return (
  <div className="list-group">
    <table className="table table-hover table-dark">
      <thead>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Price</th>
               <th>Units in stock</th>
              <th>Delete</th>
               <th>Edit</th>
            </tr>
      </thead>
      
      <tbody>
        <tr>
              <td>1</td>
            <td>maranta</td>
              <td>29.99</td>
             <td>27</td>
              <td><button className="btn btn-danger">Delete</button></td>
            <td><button className="btn btn-primary">Update</button></td>
            </tr>
        </tbody>
    </table>
  </div>
 

    )
}



export default ProductList;