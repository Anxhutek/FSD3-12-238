import express from 'express';
import { products } from './data.js';


app.get("/", (req, res) => {
    let sortedproducts = products.map((name,image,price,id) => {
        return {
            id: id,
            name: name,
            price: price,
            image: image
        };
    });
    res.json(sortedproducts);
});
const app = express();


app.use((req,res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4444, () => {
  console.log('prg4 is running on http://localhost:4444');
}); 
