import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row,Col} from 'react-bootstrap'
import img from "../images/FacebookIcon.png";

import Jumbotron from 'react-bootstrap/Jumbotron';

function clickMe(){
    alert('Thank you! We will get back to you shortly!');
}

function myfunction() {
    var win = window.open("https://www.facebook.com/groups/387221978540976/", '_blank');
    if (win != null) {
        win.focus();
      }
}

const ContactUs = () => {
    return (
        <div>
            <Jumbotron>
                <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#158cba", fontSize: 50}}>Contact Us</h1>
                <Form>
                    <Form.Group controlId="formName">
                    <Row>
                        <Col>
                            <Form.Label size="lg">First Name</Form.Label>
                            <Form.Control size="lg" type="first name" placeholder="Enter first name" />
                        </Col>
                        <Col>
                            <Form.Label size="lg">Last Name</Form.Label>
                            <Form.Control size="lg" type="last name" placeholder="Enter last name" />
                        </Col>
                    </Row>

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label size="lg">Email address</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="Message">
                        <Form.Label size="lg">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    
                    <Button onClick = {clickMe} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Jumbotron>
            <footer>
                <div style={{textAlignVertical: "center",textAlign: "center"}}>
                    <button style={{height: "5.5%", width: "5.5%", border: "none", backgroundColor:"transparent"}}><img style={{height: "100%", width: "100%"}} src={img} alt="icon" onClick={myfunction} /></button>
                </div>
            </footer>
        </div>
        
    )
}

export default ContactUs
