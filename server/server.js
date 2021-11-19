require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { nextTick } = require("process");

const app = express();


app.use(express.json())
//get all products
app.get("/api/v1/products", (req, res) => {
    console.log("route handler ran")
    res.status(200).json({
        status: "success",
        data:{
            product: ["maranta","monstera","mimoza"]
        },
        
    })
});


//get a product
app.get("/api/v1/products/:id", (req, res) =>{
    console.log(req.params)

    res.status(200).json({
        status: "success",
        data: {
            product: "maranta"
        }
    })
})

//Create a product

app.post("/api/v1/products", (req, res) =>
{
    console.log(req.body)

     res.status(201).json({
        status: "success",
        data: {
            product: "maranta"
        }
    })
});
//Update product

app.put("/api/v1/products/:id" , (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

     res.status(200).json({
        status: "success",
        data: {
            product: "maranta"
        }
    });
});




const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});