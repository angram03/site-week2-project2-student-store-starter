import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ allProducts }) {
  return (
    <div className = "product-grid">
      {allProducts?.map((product) => (
        <ProductCard key={product.id} className="box" currentProduct = {product}/>
        
      ))}
    </div>
  );
}
