import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function Home({ allProducts }) {
  return (
    <div className="home">
      <ProductGrid allProducts={allProducts} /> 
      <About />
      <Contact/>
      <Footer/>
    </div>

  )
}
