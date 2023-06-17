import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({currentProduct}) {

  
  console.log("the current product is ", currentProduct)
  return (
    
    <div className = "product-card">
      <h1>{currentProduct.name}</h1>
      <img src={currentProduct.image}/>
      <h2>{currentProduct.price}</h2>

    </div>
    
 
  )
}
