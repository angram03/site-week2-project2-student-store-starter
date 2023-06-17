import * as React from "react"
import "./Footer.css"


export default function Footer() {
  return (

    <div className="Footer">
        <div className="Categories">
           <h2>Categories</h2>
           <h3>All Categories</h3>
           <h3>Clothing </h3>
           <h3>Food</h3>
           <h3>Accessories </h3>
           <h3>Tech</h3>
        </div>
        <div className="Company">
        <h2>Company</h2>
           <h3>About Us</h3>
           <h3>Find a Store</h3>
           <h3>Terms</h3>
           <h3>Sitemap</h3>
           <h3>Careers</h3>
        </div>
        <div className="Support">
        <h2>Support</h2>
           <h3>Contact Us</h3>
           <h3>Money Refund </h3>
           <h3>Order Status</h3>
           <h3>Shipping Info</h3>
           <h3>Open Dispute</h3>
        </div>
        <div className="Account">
        <h2>Account</h2>
           <h3>Login</h3>
           <h3>Register</h3>
           <h3>Account Setting</h3>
           <h3>My Orders</h3>
           
        </div>
        <div className="Socials">
        <h2>Socials</h2>
           <h3>Facebook </h3>
           <h3>Twitter</h3>
           <h3>LinkedIn</h3>
           <h3>Instagram</h3>
           <h3>Youtube</h3>
        </div>
        <div className="App">
            <h2>Apps</h2>
            <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" />
            <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" />
        </div>



    </div>

  )
}