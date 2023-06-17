import * as React from "react"
import "./Navbar.css"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="content">
        <div className="logo">
          <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
        </div>
        <div className="socials">
        <div>

        </div>
      </div>
      <ul className="links">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>

          <li>
            <Link to="/">Buy</Link>
          </li>

      </ul>
      
      </div>
      
      </div>
    

    
  )
}
