import React from "react";
// import {Row, Col, } from "react-bootstrap";



const AddProduct = () => {
    return (
       <div className="mb-8">
           <form>
               <div class="container">
                    <div class="col-md-6 offset-md-3">
                        <div class="row gw-2">
                            <div class="p-3">
                                <input type="text" className="form-control" placeholder ="name"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input type="number" className="form-control" placeholder ="price"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input type="number" className="form-control" placeholder ="units in stock"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input type="text" className="form-control" placeholder ="description"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input type="text" className="form-control" placeholder ="images"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <button type="button" class="btn btn-outline-info  btn-md ">Add</button>
                                 </div>
                        </div>
                    </div>
      
                </div>
            </form>
        </div>
      

    )
}

export default AddProduct;
