const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

//get all products
app.get("/products", async (req, res) => {

    try{ 
        const allProducts = await pool.query("select * from products");
        res.json(allProducts.rows);

    }catch (err){
            console.log(err);
    }
});


//get a product
app.get("/products/:id", async (req, res) => {
    try{
                const{ id } =req.params;
                const product = await pool.query
                ("select * from products where productID = $1", 
                [id]);
                res.json(product.rows[0])
    }
    catch (err) {
        console.log(err.massage)
    }

  
})

//Create a product

app.post("/admin", async (req, res) => {
    console.log(req.body)

    try{

        
        const newProduct = await pool.query("INSERT INTO products (name, price, description, images) values ($1, $2, $3, $4) returning *", 
        [req.body.name,req.body.price, req.body.description,req.body.images]
        );
     res.json(newProduct.rows[0]);
   
    }catch (err){
        console.log(err.message)
    }
});
//Update product

app.put("/products/:id" , async (req, res) => {
try{
    const {id} = req.params;
    const {name} = req.params;
    const {price} = req.params;
    const {description} = req.params;
    const {images} = req.params;
    const updateProduct = await pool.query("UPDATE products SET name = $1, price = $2,  description = $3, images = $4 where productID= $5 returning *",
     [name,price,description,images,id]);

     res.json("Product was upDated!")

}catch(err)
{
    console.log(err.massage)}
  });

//Delete product
app.delete("/products/:id", async (req, res) => {
try{
    let {id} = req.params;
    let data =await pool.query("DELETE FROM products where productID = $1", [id]);
console.log(id)
res.json("Product was deleted!");
}catch(err)
{
    console.error(err.message)
}

    
});


//Routes
app.listen(5000, () => {
    console.log(`server is up and listening on port 5000`);
});