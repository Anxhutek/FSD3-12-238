import express from "express";
import { products } from "./data.js";

const app = express();

app.get("/", (req, res) => {
  const sortedProduct = products.map(({ description, reviews, ...rest }) => rest);

  res.status(200).json({
    count: sortedProduct.length,
    data: sortedProduct,
  });
});

app.get("/api/products/:pid", (req, res) => {
  const { pid } = req.params;
  const item = products.find((p) => p.id === Number(pid));
  if (!item) {
    return res.status(404).send(`<h1>Product with id ${pid} not found</h1>`);
  }

  res.status(200).json({msg: "Product found", data: item});
});

app.use((req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(4444, () => console.log("prg4 is running at 4444"));