
import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm() {
  return (
    <div className="Checkout-form">
    <Form>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </Form>

    
    </div>




 
  )
}
