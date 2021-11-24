import React, { useState } from "react";

const AddProduct = () => {

    
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription]= useState("");
    const [images, setImages]= useState("");



    function saveData()
    {
        let data={name, price, description, images}
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
      'Content-Type': 'application/json',
            },
             body:JSON.stringify(data)
  }).then((resp)=>{

    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
return (
    <div className="mb-8">
           <form className="d-flex mt-5" >
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
                                <button onClick={saveData} type="submit" className="btn btn-outline-info  btn-md ">Add</button>
                                 </div>
                        </div>
                    </div>
      
                </div>
            </form>
        </div>
    
      

    )
}



export default AddProduct;
