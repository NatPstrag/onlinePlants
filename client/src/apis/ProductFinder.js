import axios from "axios";

export default axios.create({
    badeURL: "http://localhost:3000/api/v1/products",
});

