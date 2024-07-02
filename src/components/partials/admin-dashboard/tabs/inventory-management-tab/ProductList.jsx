import React from "react";
import { List } from "@mui/material";
import ProductItems from "./ProductItems";

const ProductList = () => {
  const products = ["Pet Food", "Diaper"];

  return (
    <List>
      {products.map((product, index) => (
        <ProductItems key={index} name={product} />
      ))}
    </List>
  );
};

export default ProductList;
