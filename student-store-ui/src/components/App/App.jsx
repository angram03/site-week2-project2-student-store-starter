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
  const [cartItems, setCartItems] = useState([]);
 
  console.log("cartItems in App", cartItems)
 
  const onAdd = (event) => {
    // console.log("`````````` in APP.jsx ---> onAdd() Event is: ", event.target.value)
    const clickedProductId = event.target.value
    // console.log("onAdd App", cartItems, event)
    const exist = cartItems.find((x) => x.id === clickedProductId);
    console.log("onAdd App",exist, cartItems, clickedProductId)
    if (exist) 
     {
      return setCartItems(
        //use map here rather than filter and also return the quantity
        //this excutes when item is already in the cart so increment it q by 1
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      );

    }
    // this executed when item is not in cart so set its q to 1 
    else {
      const matchingProduct = allProducts.find((product) => product.id === +clickedProductId)
      return setCartItems([...cartItems, { name: matchingProduct.name, id: matchingProduct.id, price: matchingProduct.price, qty: 1 }]);
    }
   
  };


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.map((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.filter((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };




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
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleToggle={handleToggle}  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems} allProducts={allProducts}/>
        <Navbar/>
        
		
  
        <Routes>

           <Route path="/" element={<Home 
                          allProducts={allProducts} onAdd={(event) => onAdd(event)} onRemove={onRemove}/>} />
           <Route path="/products/:id" element={<ProductDetail onAdd={onAdd} onRemove={onRemove} allProducts={allProducts}/>} />  
        </Routes>
      </BrowserRouter>


   
  )
}
