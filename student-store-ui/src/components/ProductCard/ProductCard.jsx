import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"




export default function ProductCard({currentProduct, currentProductid, onAdd, onRemove}) {
  
  return (
    
    <div className = "product-card">
      <h1>Product Name: {currentProduct.name}</h1>
      <Link to={`/products/${currentProductid}`}><img src={currentProduct.image}/></Link>
      
      <h2>Price: ${currentProduct.price}</h2>
      {/* <h2>{currentProduct.description}</h2> */}
      {/* so here no need to change the onclick event listeners */}
      <button value={currentProductid} onClick={onAdd} >+</button>
      
      <button value={currentProductid} onClick={onRemove} >-</button>
      <div className="box">
       

      </div>
      






    </div>
    
 
  )
}
