

import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="Hero">
    <div className="content">
      <div className= "intro">
        <h1>Welcome!</h1>
        <h1>Find your Merch!</h1>
        <p>We have all kinds of goodies!</p>
        <p>Click on any of the items to start filling up your shopping cart. </p>
        <p> Checkout whenever you're ready.</p>
      </div>

      <div className="Media">
         <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="hero" className="hero-img"/> 
      </div>
      </div>
    </div>




    // <div id="welcome">
    //     <div id="hi">
    //         <h2> Welcome!</h2>
    //         <h2> Find Your Merch!</h2>
    //         <h2>
    //         We have all kinds of goodies. Click on any of the items to start filling up your shopping cart.
    //         of the items to start filling up your shopping cart.
    //         </h2>
    //     </div>
    //     <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" />
    // </div>

 
  )
}
