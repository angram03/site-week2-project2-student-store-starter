import * as React from "react"
import "./ShoppingCart.css"
import { useState, useEffect } from "react"



export default function ShoppingCart({cart, setCart, cartItems, onAdd, onRemove, allProducts}) {


  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
 
  
  // const[price, setPrice] = useState(0)

  // const handlePrice = () => {
   
  //   let ans = 0
  //   cart.map((item) => (
      
  //     ans += item.qty * item.price
  //   ))
  //   setPrice(ans)
  // }

  const handleRemoveItem = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)

    
  }
  

  
  // useEffect(() => (
  //   handlePrice()
  // ))
  console.log(allProducts)
  console.log(cart)

   
  return (
    <article>
    {
      cart?.map((item) => (
        <div className="cart_box" key = {item.id}>
          <div className="cart_img">
            <img src={item.image} />
            <p>{item.title}</p>
          </div>
          <div>
          {/* onClick={()=>onAdd(item)} */}
            <button value={allProducts} onClick={onAdd} >+</button>
            <button>{item.qty}</button>
            <button value={allProducts.id} onClick={()=>onRemove(item)}>-</button>
          </div>
          <div>
            <span> {item.price} </span>
            <button onClick={() => handleRemoveItem(item.id)}>remove</button>
          </div>

        </div>

      ))
    }
    <div>
      {/* <span>Total price of your cart</span>
      <span>{price}</span> */}
    </div>
    </article>
    
  )
}
