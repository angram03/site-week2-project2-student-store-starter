import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import axios from "axios";
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"
import Sidebar from "../Sidebar/Sidebar"
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [isOpen, setIsOpen] = useState("closed");
 
  const [shoppingCart, setShoppingCart] = useState([])
  
 

  const handleAddItemToCart = (event) => {
    console.log("look here")
    let productId = event.target.value 
    const product = {itemId: productId, quantity: 1}
    let cart = shoppingCart;

    let found = cart.findIndex(item => item.itemId == productId);
    if (found == -1) {
      cart.push(product)
    }
    else {
      cart.filter(item => item.itemId == prodId).forEach(item => item.quantity++)
    }

    setShoppingCart(cart)
} 

const handleRemoveItemFromCart = (event) => {
  console.log("aqui")
  let productId = event.target.value;
  const product = {itemId: productId, quantity: 1}
  let cart = shoppingCart;

  let found = cart.findIndex(item => item.id == productId)

  if (found != -1 ) {
      cart.filter(item => item.itemId == productId).map(item => item.quantity--)
      cart = cart.filter(item => item.quantity != 0)
  }
  
  setShoppingCart(cart)
}

  const handleToggle = () => {
    console.log("--here i handle toggle----")
    if (isOpen === "closed") {
      setIsOpen("open")     
    }
    else {
      setIsOpen("closed")      
    } 
}


  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/`)
      .then((response) => {
        setAllProducts(response.data.products);
        
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log("All products", allProducts)

  return (

      <BrowserRouter>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleToggle={handleToggle} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
        <Navbar/>
        
		
  
        <Routes>

           <Route path="/" element={<Home allProducts={allProducts} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
           <Route path="/products/:id" element={<ProductDetail />} />  
        </Routes>
      </BrowserRouter>


   
  )
}
