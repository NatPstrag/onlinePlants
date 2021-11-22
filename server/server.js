require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");


const app = express();

app.use(cors());
app.use(express.json())

//get all products
app.get("/api/v1/products", async (req, res) => {

    try{ 
        const results = await db.query("select * from products");

        
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

app.post("/api/v1/products", async (req, res) =>
{console.log(req.body)

    try{
        const results = await db.query
        ("INSERT INTO products (name, price, units_in_stock, description, images) values ($1, $2, $3, $4, $5) returning *", 
        [req.body.name, req.body.price, req.body.units_in_stock, req.body.description, req.body.images]);
console.log(results)
        res.status(201).json({
            status: "success",
            data: {
                products: results.rows[0],
            }
        })

    }catch (err){
        console.log(err)
    }
});
//Update product

app.put("/api/v1/products/:id" , async (req, res) => {
try{
    const results = await db.query
    ("UPDATE products SET name = $1, price = $2, units_in_stock=$3, description = $4, images = $5 where id= $6 returning *",
     [req.body.name, req.body.price, req.body.units_in_stock, req.body.description, req.body.images, req.params.id]);

     console.log(results);

        res.status(200).json({
        status: "success",
        data: {
            products: results.rows[0],
        }
    });

}catch(err)
{
    console.log(err)
}
   console.log(req.params.id);
    console.log(req.body);
});

//Delete product
app.delete("/api/v1/products/:id", async (req, res) =>{
try{
const results =db.query("DELETE FROM products where id = $1", [req.params.id]);

    res.status(204).json({
        status: "success"
    });

}catch(err)
{
    console.log(err)
}

    
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});