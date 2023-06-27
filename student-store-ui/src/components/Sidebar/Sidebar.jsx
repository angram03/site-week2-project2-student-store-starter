import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({handleToggle, isOpen, handleAddItemToCart, handleRemoveItemFromCart}) {
  if (isOpen === "open"){
    <ShoppingCart   isOpen={isOpen} />
    
    
 }
 else if(isOpen === "closed")
 {
  <h2>Side Bar</h2>
 }
    
 

  return (
    <section className={`SideBar ${isOpen}`} > 
        <button onClick={handleToggle}>BUTTON</button>

        <div className="cart">
          <span>
              <i className="fas fa-cart-plus"></i> 
          </span>
         
          </div>

    {isOpen==="open" ? (<ShoppingCart isOpen={isOpen}  handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>) : null}
    

  
    </section>

    
  )
 
}
