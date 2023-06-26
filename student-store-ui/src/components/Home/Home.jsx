import * as React from "react"
import "./Home.css"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"

export default function Home({ allProducts, onAdd, onRemove}) {
  return (
    <div className="home" id="home">
      {/* <Navbar /> */}
      <Hero />
      <SearchBar products={allProducts} onAdd={onAdd} onRemove={onRemove} />
      <About />
      <Contact/>
      <Footer/>

    </div>

  )
}
