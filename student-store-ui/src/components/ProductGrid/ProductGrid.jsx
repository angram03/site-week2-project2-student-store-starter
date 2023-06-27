import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ allProducts, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className = "product-grid" id="product-grid"> 
      {allProducts?.map((product) => (
        <ProductCard key={product.id} className="box" currentProduct = {product} currentProductid = {product.id} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} />
        
      ))}
    </div>
  );
}
