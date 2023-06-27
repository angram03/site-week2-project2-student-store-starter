import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"




export default function ProductCard({currentProduct, currentProductid, handleAddItemToCart, handleRemoveItemFromCart}) {
  
  return (
    
    <div className = "product-card">
      <h1>Product Name: {currentProduct.name}</h1>
      <Link to={`/products/${currentProductid}`}><img src={currentProduct.image}/></Link>
      
      <h2>Price: ${currentProduct.price}</h2>

      <button value={currentProductid} onClick={handleAddItemToCart}>+</button>
      
     

     
      <button value={currentProductid} onClick={handleRemoveItemFromCart} >-</button>
    
    </div>
    
 
  )
}
