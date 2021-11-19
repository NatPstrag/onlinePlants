require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan");


const app = express();


app.use(express.json())

//get all products
app.get("/api/v1/products", async (req, res) => {

    try{ 
        const results = await db.query("select * from products")

        console.log(results)
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data:{
            products: results.rows
        },
    })

    }catch (err){
            console.log(err);
    }
});


//get a product
app.get("/api/v1/products/:id", async (req, res) =>{
    console.log(req.params.id);

        try{
                const results = await db.query
                ("select * from products where id = $1", 
                [req.params,id]);

   

    res.status(200).json({
        status: "success",
        data: {
            product: results.rows[0]
        }
    })

    }
    catch (err) {
        console.log(err)
    }

  
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

//Delete product
app.delete("/api/v1/products/:id", (req, res) =>{
    res.status(204).json({
        status: "success"
    });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});