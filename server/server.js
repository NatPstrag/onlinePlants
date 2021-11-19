require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getProducts", (req, res) => {
    res.json({
        status: "success",
        product: "maranta"
    })
});
//http://localhost:3001/getProducts



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});