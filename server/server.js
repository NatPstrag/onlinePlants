require("dotenv").config();
const express = require("express");

const app = express();


//get all products
app.get("/getProducts", (req, res) => {
    res.status(200).json({
        status: "success",
        data:{
            product: ["maranta","monstera","mimoza"]
        },
        
    })
});


//get a product
app.get("/api/v1/products/:productID", (req, res) =>{
    console.log(req.params)
})

//Create a product

app.post("/api/v1/products", (req, res) =>
{
    console.log(req)
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});