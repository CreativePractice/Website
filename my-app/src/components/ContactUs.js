import emailjs from "emailjs-com";
import React from 'react';
import { Jumbotron } from "react-bootstrap";
import SocialFollow from "./SocialFollow";

export default function ContactUs() {

    function sendEmail(e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var textName = document.getElementById("textName");
        var textEmail = document.getElementById("textEmail");
        var textMessage = document.getElementById("textMessage");

        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        if (name !== "" && email.match(pattern) && message !== "")
        {


            emailjs.sendForm('service_k4jk81k', 'template_pkgbffz', e.target, process.env.REACT_APP_EMAILJSKEY)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                textName.innerHTML = "";
                textEmail.innerHTML = "";
                textMessage.innerHTML = "";
                e.target.reset()
                alert('Thank you! We will get back with you shortly!');
            
                return true;
        }
        else 
        {
            e.preventDefault();

            if (name === "")
            {
                textName.innerHTML = "Please enter your name";
                textName.style.color = "#ff0000";
            }
            
            if (email.match(pattern)) 
            {
                textEmail.innerHTML = "Your E-mail address is valid";
                textEmail.style.color="#00ff00";
            }
            else
            {
                textEmail.innerHTML = "Please enter a valid E-mail address";
                textEmail.style.color = "#ff0000";
            }

            if (message === "")
            {
                textMessage.innerHTML = "Please enter a message";
                textMessage.style.color = "#ff0000";
            }

            return false;
        }
    }

   function validation()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var textName = document.getElementById("textName");
        var textEmail = document.getElementById("textEmail");
        var textMessage = document.getElementById("textMessage");

        if (name !== "")
        {
            textName.innerHTML = "";
        }
        
        if (email !== "" || email === "") 
        {
            textEmail.innerHTML = "";
        }

        if (message !== "")
        {
            textMessage.innerHTML = "";
        }
    }
    
return(
        <div>
            <Jumbotron style={{background: "White"}}>
                <h1 style={{ textAlignVertical: "center", textAlign: "center", color: "#4782ed", fontSize: 50 }}>Contact Us</h1>
                <div className="container">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input style={{borderColor:"black"}} type="text" className="form-control" placeholder="Name" id="name" name="name" onChange={validation} />
                                <span id="textName"></span>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input style={{borderColor:"black"}} type="email" className="form-control" placeholder="Email Address" id="email" name="email" onChange={validation} />
                                <span id="textEmail"></span>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea style={{borderColor:"black"}}className="form-control" cols="30" rows="8" placeholder="Your message" id="message" name="message" onChange={validation} ></textarea>
                                <span id="textMessage"></span>
                                <br></br>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input style={{backgroundColor:"#4782ed"}} type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </Jumbotron>
            <SocialFollow/>
        </div>
    )
}
