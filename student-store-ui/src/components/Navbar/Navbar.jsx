import * as React from "react";
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
<script
  src="https://kit.fontawesome.com/c1c3975cdf.js"
  crossorigin="anonymous"
></script>;

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <Link to="/">
        <div className="logo">
         <a href="#home"><img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" /> </a>
        </div>
        </Link>
        
        <div className="socials">
          <div></div>
        </div>
        <ul className="links">
          <Link to="/" >
          <li>
            <a href="#home">Home</a>
          </li>
          </Link>
          
          <li>
            {/* <Link to="/#About">About Us</Link>
             */}
             <a href="#About">About</a>
          </li>
          <li>
           <a href="#contact"> Contact Us </a>
          </li>

          <li>
            <a href="#product-grid">Buy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
