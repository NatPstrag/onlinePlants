import React, {Fragment} from "react";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const Admin = () => {
    return (
        <Fragment>
            <div className="container">
            <AddProduct />
            <ProductList />
          </div>
        </Fragment>
    )
}
export default Admin;