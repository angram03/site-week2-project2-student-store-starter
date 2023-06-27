import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({handleToggle, isOpen, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, allProducts}) {
  console.log("sidebar", shoppingCart)
//   if (isOpen === "open"){
//     <ShoppingCart shoppingCart={shoppingCart} isOpen={isOpen} allProducts={allProducts}/>
    
    
//  }
//  else if(isOpen === "closed")
//  {
//   <h2>Side Bar</h2>
//  }
    
 

  return (
    <section className={`SideBar ${isOpen}`} > 
        <button onClick={handleToggle}>BUTTON</button>

        <div className="cart">
          <span>
              <i className="fas fa-cart-plus"></i> 
          </span>
         
          </div>

    {isOpen==="open" ? (<ShoppingCart handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} allProducts={allProducts}/>) : null}
    
  
    </section>

    
  )
 
}
