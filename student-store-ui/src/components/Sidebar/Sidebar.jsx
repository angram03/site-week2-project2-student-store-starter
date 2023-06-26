import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({handleToggle, isOpen, onAdd, onRemove, cartItems, setCartItems, allProducts}) {
  if (isOpen === "open"){
    <ShoppingCart   isOpen={isOpen} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems} allProducts={allProducts}/>
    
    
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

    {isOpen==="open" ? (<ShoppingCart isOpen={isOpen} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems} allProducts={allProducts}/>) : null}
    

  
    </section>

    
  )
 
}
