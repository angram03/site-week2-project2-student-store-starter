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
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [cartItems, setCartItems] = useState([]);
 
 //when we click on the add item to cart button we get back the id of the item 
 // if a plus is clicked on, we take the id and add 2 and put it into shopping cart
 //when you click on plus or minus, you have the id And we can search the id in shopping cart and add one to quantity
 

  const handleClick2 = (item) => {
    let isPresent = false
    cart.forEach((product) => {
      if(item.id === product.id){
        isPresent = true
      }
    })
    if(isPresent){
      setWarning(true);
			setTimeout(()=>{
			setWarning(false);
			}, 2000);
			return ;
    }
      
    setCart([...cart, item])
  }
    
  
  const onAdd = (e) => {
    console.log("hello HELLO")
   console.log('target',e.target.value)
   console.log(allProducts)
    // const exist = cartItems.find((x) => x.id === product.id);
    // if (exist) {
    //   setCartItems(
    //     //Why are you m
    //     cartItems.filter((x) =>
    //       x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    //     )
    //   );

    // } else {
    //   setCartItems([...cartItems, { ...product, qty: 1 }]);
    // }
    // console.log("cartItem", cartItems)
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
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
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleToggle={handleToggle}  handleClick2={handleClick2} cart={cart} setCart={setCart} size={cart.length} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems} allProducts={allProducts}/>
        <Navbar/>
        
			  {warning && <div className="warning">Item is already added to your cart</div>}
		    
        
        <Routes>

           <Route path="/" element={<Home 
                                    allProducts={allProducts} handleClick2={handleClick2} onAdd={onAdd} onRemove={onRemove}/>} />
           <Route path="/products/:id" element={<ProductDetail handleClick2={handleClick2} onAdd={onAdd} onRemove={onRemove} allProducts={allProducts}/>} />
           
           
          
        </Routes>


      </BrowserRouter>


   
  )
}
