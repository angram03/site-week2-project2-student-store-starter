import * as React from "react";
import "./ShoppingCart.css";
import { useState, useEffect } from "react";

export default function ShoppingCart() {
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const totalPrice = itemsPrice + taxPrice;

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
          {/* {cartItems?.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <td>{item.title}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>
                  {item.price}*{item.qty}{" "}
                </td>
              </div>
            </div>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
