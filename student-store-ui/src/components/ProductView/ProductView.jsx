import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function ProductView({ product, productid }) {
  const { name, image, price, description } = product;

  return (
    // <ProductCard currentProduct={product} currentProductid = {productid}/>

    <div className="product-card">
      <h1>{name}</h1>
      <Link to={`/products/${productid}`}>
        <img src={image} />
      </Link>

      <h2>{price}</h2>
      <h2>{description}</h2>
    </div>

    //I want to implement the code here to look at the description product.description
  );
}
