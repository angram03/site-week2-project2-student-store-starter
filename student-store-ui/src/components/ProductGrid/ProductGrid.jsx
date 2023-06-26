import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ allProducts, handleClick2}) {
  return (
    <div className = "product-grid" id="product-grid"> 
      {allProducts?.map((product) => (
        <ProductCard key={product.id} className="box" currentProduct = {product} currentProductid = {product.id} handleClick2={handleClick2} allProducts={allProducts}/>
        
      ))}
    </div>
  );
}
