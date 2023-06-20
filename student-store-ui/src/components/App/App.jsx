import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import axios from "axios";
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"
export default function App() {

  const [allProducts, setAllProducts] = useState([]);


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
        <Navbar />
        <Routes>

           <Route path="/" element={<Home 
                                    allProducts={allProducts}/>} />
           <Route path="/products/:id" element={<ProductDetail />} />
           
           
          
        </Routes>


      </BrowserRouter>


   
  )
}
