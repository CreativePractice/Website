import React from 'react';
import { Navbar, Nav} from "react-bootstrap"

function Navigation () {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#home">CPR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home" to="/AboutUs">About Us</Nav.Link>
                    <Nav.Link href="#home" to="/ContactUs">Contact Us</Nav.Link>
                    <Nav.Link href="#home" to="/Calendar">Calendar</Nav.Link>
                    <Nav.Link href="#home" to="/Performances">Performances</Nav.Link>

                    </Nav>
                    
                    
                    
                    
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Navigation


