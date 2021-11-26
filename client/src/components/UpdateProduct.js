import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProductFinder from "../apis/ProductFinder";
import { ProductsContext } from "../context/ProductsContext";


const UpdateProduct = (props) => {
    const {productid}= useParams();
    const {products} = useContext(ProductsContext)
    const [name, setName]= useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription]= useState("");
    const [images, setImages]= useState("");


    useEffect(() => {
        const fetchData = async() => {
            const response = await ProductFinder.get(`/${productid}`)
            console.log(response.data.data)
            setName(response.data.data.products.name)
             setPrice(response.data.data.products.price)
              setDescription(response.data.data.products.description)
               setImages(response.data.data.products.images)
        }

        fetchData()
    },[])
   

const handleSubmit = async (e) => {
    e.preventDefault()
    const UpdateProduct = await ProductFinder.put(`/${productid}`, (
        name, 
        price,
        description,
        images
    ))
    console.log(UpdateProduct);
}

    return(
        <div>
 
          <form action="">
       <div className="form-group">
        
           <label htmlFor="name"> Name</label>
           <input value={name} onChange={e => setName(e.target.value)}  
           id="name" className="form-control" type ="text" />
       </div>
             <div className="form-group">
           <label htmlFor="price">Price</label>
           <input value={price} onChange={e => setPrice(e.target.value)} 
           id="price" className="form-control" type ="number" />
       </div>
             <div className="form-group">
           <label htmlFor="description">Description</label>
           <input 
           value={description} onChange={e => setDescription(e.target.value)}
            id="description" className="form-control" type ="text" />
       </div>
             <div className="form-group">
           <label htmlFor="images">Images</label>
           <input value={images} onChange={e => setImages(e.target.value)}
           id="images" className="form-control" type ="text" />
       </div>
       <button type="submit" onClick={handleSubmit} className="btn btn-secondary"> Submit</button>
   </form>
   
        </div>
    )
}
export default UpdateProduct;