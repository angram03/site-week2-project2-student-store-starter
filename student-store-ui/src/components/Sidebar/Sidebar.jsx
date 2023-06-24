import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({handleToggle, isOpen, size, handleClick2, cart, setCart}) {
  if (isOpen === "open"){
    <ShoppingCart isOpen={isOpen} handleClick2={handleClick2} cart={cart} setCart={setCart} size={cart.length} />
    
    
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
          <span>
            {size}
          </span>
          </div>

    {isOpen==="open" ? (<ShoppingCart />) : null}
    

  
    </section>

    
  )
 
}
