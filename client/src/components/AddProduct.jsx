import React, { useState } from "react";
import  classes from './AddProduct.module.css'
import'./button.css'


const AddProduct = () => {

    
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription]= useState("");
    const [images, setImages]= useState("");



    function saveData()
    {
        let data={name, price, description, images}
        fetch("http://localhost:5000/admin", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
      'Content-Type': 'application/json',
            },
             body:JSON.stringify(data)
  }).then((resp)=>{

    resp.json().then((result)=>{
      console.warn("result",result)
      window.location.reload();
    })
  })
    }



return (
    <div className={classes.column11}>
        <div className="p-3">
            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder ="name"/>
        </div>
        <div className="p-3">
            <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="form-control" placeholder ="price"/>
        </div>
        <div className="p-3">
            <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" placeholder ="description"/>
        </div>
        <div className="p-3">
            <input value={images} onChange={e => setImages(e.target.value)} type="text" className="form-control" placeholder ="images"/>
        </div>
        <div className="p-3">
            <button  className="name noselect" onClick={saveData} type="submit">Add</button>
        </div>
    </div>
    )
}
export default AddProduct;
