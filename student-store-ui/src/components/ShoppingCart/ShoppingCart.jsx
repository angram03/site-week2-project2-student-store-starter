import * as React from "react";
import "./ShoppingCart.css";
import { useState, useEffect } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function ShoppingCart({shoppingCart, allProducts}) {
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const totalPrice = itemsPrice + taxPrice;
  console.log("shoppingcart", shoppingCart)
  let subPrice = 0
  let taxPrice = 0
  let final = 0
  const [price, setPrice] = useState(0)
  const [tax, setTax] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)
  return (
    // change this to table tag
    <div>
     <table>
        <thead>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Cost</th>
        </thead>

        <tbody>
          
           {shoppingCart?.map((item) => {

            // subPrice = subPrice + (item.quantity * item.price)
            // taxPrice =  taxPrice + (price * 0.09)
            // final = subPrice + taxPrice



            return(
            <tr className="itemId" key={item.itemId}>
                <td>{allProducts[item.itemId - 1].name}</td>
                <td>{item.quantity}</td>
                <td>{allProducts[item.itemId - 1].price}</td>
                <td>{allProducts[item.itemId - 1].price * item.quantity}{" "}  </td>
                </tr>)
                
           
            })} 
           
         
        </tbody>
      </table> 
  
{/* <CheckoutForm /> */}
    </div>
  );
}
