import * as React from "react"
import "./Contact.css"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Contact() {
  return (

    <div className="contact" id="contact">
        <div className="info">
        <h1>Contact Us</h1>
            <p>Email: code@path.org</p>
                
            <p>Phone: 1-800-CODEPATH</p>
        
            <p>Address: 123 Fake Street, San Francisco, CA</p>
       

        </div>


    </div>

  )
}