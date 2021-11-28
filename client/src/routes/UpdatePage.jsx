import React, {Fragment, useState} from "react";


const UpdatePage = ({product}) => {

    const [name, setName]= useState(product.name);  
    const [price, setPrice]= useState(product.price);
    const [description, setDescription]= useState(product.description);
    const [images, setImages]= useState(product.images);


    //edit product function
    function updateProduct(e, productid)
    {
        e.stopPropagation()
     
        try{
            const body= {name, price, description, images};
            const response = fetch(`http://localhost:5000/admin/${productid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response)
                  window.location.reload();
        }catch(err) {
            console.error(err.message)
        }

    }

return(
    <Fragment>
        <button type="button" 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target={` #id${product.productid}`}>
              Edit
        </button>
        <div class="modal" id={`id${product.productid}`}>
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title color-black">Edit product</h4>
            <button type="button" 
            class="close" 
            data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
       <input type="text" 
       className="form-control" 
       value={name} 
       onChange={e => setName(e.target.value)}
       />
        <input type="number" 
        className="form-control" 
        value={price}
        onChange={e => setPrice(e.target.value)}
        />
        <input type="text" 
        className="form-control" 
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
        <input type="text" 
        className="form-control" 
        value={images}
        onChange={e => setImages(e.target.value)}
        />
        </div>
        <div class="modal-footer">
        <button type="submit" 
                class="btn btn-warning"
                data-dismiss="modal" 
                onClick={(e) => updateProduct(e, product.productid)} 
        >
            Edit
        </button>
        </div>
        </div>
    </div>
    </div>
    </Fragment>
    )
}
export default UpdatePage;