import React from 'react'
import emailjs from "emailjs-com";

export default function Conatct() {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_xhcivcc', 'template_k1yu8ne', e.target , 'user_Nk3q7kFoacBTOIwn0ZbYI')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
  return (
    
 <div>
 <h1 className="h-Conatct"><span className="s-Conatct"> Conatct</span></h1>
 <div className="contact">
  <h2 className="content-head is-center">Contact Us!</h2>

  <p>
     We would love to hear from you ! 
     Please use the Contact Form to send us a message.
 </p>
  <form onSubmit={sendEmail}>
  
  <div className="col-md-4">
  <label for="validationDefault01" className="form-label">First name</label>
  <input type="text"
   className="form-control" id="validationDefault01" placeholder="First name" name="Firstname"
    required/>
  </div>
  
  <div className="col-md-4">
  <label for="validationDefault02" className="form-label">Last name</label>
  <input type="text" className="form-control" name="Lastname" id="validationDefault02" placeholder="Last name" required/>
  </div>


  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Emaill</label>
  <div className="input-group">
    <input type="email" required placeholder="your.name@email.com" name="Emaill" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
  </div>
  </div>


  <div className="col-md-4">
    <label for="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" name="City" id="validationDefault03" placeholder="City" required/>
  </div>

  <div className="col-md-4">
    <label for="validationDefault03" className="form-label">Massage</label>
    <textarea type="text" className="form-control"  name="Massage" id="validationDefault03" placeholder="Tell us what's on your mind..." required>
        </textarea>
  </div>
  
  <div className="col-12">
    <button className="bt-send"  value="Send"><i className="fa fa-paper-plane"  type="submit"></i>Send</button>
</div>

  </form>

</div>
</div>
  )
}