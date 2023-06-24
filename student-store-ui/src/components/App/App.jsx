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

  const handleClick2 = (item) => {
    console.log(item)
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
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleToggle={handleToggle}  handleClick2={handleClick2} cart={cart} setCart={setCart} size={cart.length}/>
        <Navbar/>
        
			  warning && <div className="warning">Item is already added to your cart</div>
		    
        
        <Routes>

           <Route path="/" element={<Home 
                                    allProducts={allProducts} handleClick2={handleClick2}/>} />
           <Route path="/products/:id" element={<ProductDetail handleClick2={handleClick2}/>} />
           
           
          
        </Routes>


      </BrowserRouter>


   
  )
}
