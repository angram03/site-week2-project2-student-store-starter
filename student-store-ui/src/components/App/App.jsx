import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import SearchBar from "../searchBar/searchBar"
import axios from "axios";
import "./App.css"

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
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          <SearchBar products={allProducts}/>
          
          
          
          
        </main>

        <Routes>
           <Route path="/" element={<Home allProducts={allProducts}/>} />
          
        </Routes>


      </BrowserRouter>


    </div>
  )
}
