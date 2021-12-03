import React from "react";
import { matchRoutes } from "react-router";

import ProductListClient from "../components/ProductListClient";
import classes from'./Home.module.css'





const Home = () => {
    return (
    
        <div>
          <div className={classes.element}>

            <div className={classes.shape}></div> 
          {/* <Header /> */}
       
          <ProductListClient />
 </div>
        </div>
    )
}
export default Home;