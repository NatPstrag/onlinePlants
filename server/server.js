const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
require("dotenv").config();

const morgan = require("morgan");

app.use(cors());
app.use(express.json());

//get all products
app.get("/products", async (req, res) => {

    try{ 
        const results = await db.query("select * from products");
        
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                products: results.rows,
            },
        });

    }catch (err){
            console.log(err);
    }
});


//get a product
app.get("/products/:id", async (req, res) => {
       console.log(req.params.id);
    try{
            const product = await db.query
                ("select * from products where productid = $1", 
                [req.params.id]);
                res.json(product.rows[0]);
        res.status(200).json({
      status: "succes",
      data: {
        products: product.rows[0],
      }
    })
    }
    catch (err) {
        console.log(err.massage)
    }

  
})

//Create a product

app.post("/products", async (req, res) => {
    console.log(req.body)

    try{

        
        const results = await db.query("INSERT INTO products (name, price, description, images) values ($1, $2, $3, $4) returning *", 
        [req.body.name,req.body.price, req.body.description,req.body.images]
        );
    console.log(results);
    res.status(201).json({
        status: "succes",
        data: {
            product: results.rows[0],
        }
    })
   
    }catch (err){
        console.log(err.message)
    }
});
//Update product

app.put("/products/:id" , async (req, res) => {
try{
    
    const results= await db.query("UPDATE products SET name = $1, price = $2,  description = $3, images = $4 where productid= $5 returning *",
     [req.body.name,req.body.price,req.body.description,req.body.images,req.params.id]);

     res.status(200).json({
         status: "succes",
         data: {
             product: results.rows[0],
         }
     })

}catch(err)
{
    console.log(err.massage)}
    console.log(req.params.id);
  console.log(req.body);
  });

//Delete product
app.delete("/products/:id", async (req, res) => {
try{

    const results =db.query("DELETE FROM products where productid = $1", [req.params.id]);
console.log(id);
res.status(204).json({
    status: "success"
})
}catch(err)
{
    console.error(err.message)
}

    
});


//Routes
app.listen(5000, () => {
    console.log(`server is up and listening on port 5000`);
});