import React from 'react';
import { Navbar, Nav,Image} from "react-bootstrap"
import logo from "../images/Creative_Practice_Sample_icon.png"


function Navigation () {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="/Website/"><Image src={logo} fluid width="30" height="30"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style = {{float:"right"}}>
                    <Nav.Link href="/Website/">About Us</Nav.Link>
                    <Nav.Link href="/Website/#/Performances">Performances</Nav.Link>
                    <Nav.Link href="/Website/#/Calendar">Calendar</Nav.Link>
                    <Nav.Link href="/Website/#/ContactUs">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Navigation


