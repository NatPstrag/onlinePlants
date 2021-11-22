import React, { useState } from "react";



const AddProduct = () => {
    
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription]= useState("");
    const [images, setImages]= useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
                const body = {name, price,description, images};
                const response = await fetch("http://localhost:5000/products", {
                    method: "POST",
                    headers: {"Content-Type": "appliction/json" },
                    body: JSON.stringify(body)
                })
                     console.log(response);
            //    window.location="/";
              
        }catch(err){
                console.error(err.message)
        }
    
    };
    return (
    
       <div className="mb-8">
           <form className="d-flex mt-5" onSubmit={onSubmitForm}>
               <div className="col">
                    <div className="col-md-6 offset-md-3">
                        <div className="row gw-2">
                            <div className="p-3">
                                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder ="name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="row gx-2">
                            <div className="p-3">
                                <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="form-control" placeholder ="price"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="row gx-2">
                            <div className="p-3">
                                <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" placeholder ="description"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="row gx-2">
                            <div className="p-3">
                                <input value={images} onChange={e => setImages(e.target.value)} type="text" className="form-control" placeholder ="images"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="row gx-2">
                            <div className="p-3">
                                <button  className="btn btn-outline-info  btn-md ">Add</button>
                                 </div>
                        </div>
                    </div>
      
                </div>
            </form>
        </div>
    
      

    )
}



export default AddProduct;
