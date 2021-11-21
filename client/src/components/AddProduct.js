import React, { useState } from "react";
import ProductFinder from "../apis/ProductFinder";

// import {Row, Col, } from "react-bootstrap";



const AddProduct = () => {
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [unitsInStock, setUnitsInStock]= useState("");
    const [description, setDescription]= useState("");
    const [images, setImages]= useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
                const response = await ProductFinder.post("/",{
                    name,
                    price,
                    unitsInStock,
                    description,
                    images
                })
                console.log(response)
        }catch(err){

        }
    }
    return (
       <div className="mb-8">
           <form>
               <div class="col">
                    <div class="col-md-6 offset-md-3">
                        <div class="row gw-2">
                            <div class="p-3">
                                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder ="name"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="form-control" placeholder ="price"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input value={unitsInStock} onChange={e => setUnitsInStock(e.target.value)} type="number" className="form-control" placeholder ="units in stock"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" placeholder ="description"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <input value={images} onChange={e => setImages(e.target.value)} type="text" className="form-control" placeholder ="images"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="row gx-2">
                            <div class="p-3">
                                <button onClick={handleSubmit} type="submit" class="btn btn-outline-info  btn-md ">Add</button>
                                 </div>
                        </div>
                    </div>
      
                </div>
            </form>
        </div>
      

    )
}



export default AddProduct;
