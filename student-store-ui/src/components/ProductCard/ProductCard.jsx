import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function ProductCard({currentProduct, currentProductid}) {

  // var productId = currentProduct.id
  console.log("the current product is ", currentProduct)
  return (
    
    <div className = "product-card">
      <h1>Product Name: {currentProduct.name}</h1>
      <Link to={`/products/${currentProductid}`}><img src={currentProduct.image}/></Link>
      
      <h2>Price: ${currentProduct.price}</h2>
      {/* <h2>{currentProduct.description}</h2> */}

    </div>
    
 
  )
}
