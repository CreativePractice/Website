import emailjs from "emailjs-com";
import React from 'react';
import { Jumbotron } from "react-bootstrap";
import img from "../images/FacebookIcon.png";


function myfunction() {
    var win = window.open("https://www.facebook.com/groups/387221978540976/", '_blank');
    if (win != null) {
        win.focus();
      }
}

export default function ContactUs() {

    function sendEmail(e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var text = document.getElementById("text");

        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        if (email.match(pattern) && message != "") {


            emailjs.sendForm('service_k4jk81k', 'template_pkgbffz', e.target, process.env.REACT_APP_EMAILJSKEY)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                text.innerHTML = "";
                e.target.reset()
                alert('Thank you! We will get back with you shortly!');
        } else {
            alert("Please Type in a message")
        }
    }

    function emailValidation()
    {
        // var form = document.getElementById("form");
        var email = document.getElementById("email").value;
        var text = document.getElementById("text");

        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email.match(pattern))
        {
            // form.classList.add("valid");
            // form.classList.remove("invalid");
            text.innerHTML = "Your E-mail address is valid";
            text.style.color="#00ff00";
        }
        else
        {
            // form.classList.add("invalid");
            // form.classList.remove("valid");
            text.innerHTML = "Please enter valid E-mail address";
            text.style.color = "#ff0000"  
        }

        if (email == "")
        {
            // form.classList.remove("valid");
            // form.classList.remove("invalid");
            text.innerHTML = "";
        }
    }

    return(
        <div>
            <Jumbotron>
                <h1 style={{ textAlignVertical: "center", textAlign: "center", color: "#158cba", fontSize: 50 }}>Contact Us</h1>
                <div className="container">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" id="name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" id="email" name="email" onKeyDown={emailValidation}/>
                                <span id="text"></span>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" id="message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </Jumbotron>
            <footer>
                <div style={{textAlignVertical: "center",textAlign: "center"}}>
                    <button style={{height: "5.5%", width: "5.5%", border: "none", backgroundColor:"transparent"}}><img style={{height: "100%", width: "100%"}} src={img} alt="icon" onClick={myfunction} /></button>
                </div>
            </footer>
            <br></br>
        </div>
    )
}



// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import {Row,Col} from 'react-bootstrap'
// import img from "../images/FacebookIcon.png";

// import Jumbotron from 'react-bootstrap/Jumbotron';

// function clickMe(){
//     alert('Thank you! We will get back to you shortly!');
// }

// function myfunction() {
//     var win = window.open("https://www.facebook.com/groups/387221978540976/", '_blank');
//     if (win != null) {
//         win.focus();
//       }
// }

// const ContactUs = () => {
//     return (
//         <div>
//             <Jumbotron>
//                 <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#158cba", fontSize: 50}}>Contact Us</h1>
//                 <Form>
//                     <Form.Group controlId="formName">
//                     <Row>
//                         <Col>
//                             <Form.Label size="lg">First Name</Form.Label>
//                             <Form.Control size="lg" type="first name" placeholder="Enter first name" />
//                         </Col>
//                         <Col>
//                             <Form.Label size="lg">Last Name</Form.Label>
//                             <Form.Control size="lg" type="last name" placeholder="Enter last name" />
//                         </Col>
//                     </Row>

//                     </Form.Group>

//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Label size="lg">Email address</Form.Label>
//                         <Form.Control size="lg" type="email" placeholder="Enter email" />
//                     </Form.Group>

//                     <Form.Group controlId="Message">
//                         <Form.Label size="lg">Message</Form.Label>
//                         <Form.Control as="textarea" rows={3} />
//                     </Form.Group>

                    
//                     <Button onClick = {clickMe} variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>

//             </Jumbotron>
//             <footer>
//                 <div style={{textAlignVertical: "center",textAlign: "center"}}>
//                     <button style={{height: "5.5%", width: "5.5%", border: "none", backgroundColor:"transparent"}}><img style={{height: "100%", width: "100%"}} src={img} alt="icon" onClick={myfunction} /></button>
//                 </div>
//             </footer>
//         </div>
        
//     )
// }

// export default ContactUs
