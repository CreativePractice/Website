import React from 'react';
import { Navbar, Nav} from "react-bootstrap"

function Navigation () {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="/Website/">CPR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/Website/">About Us</Nav.Link>
                    <Nav.Link href="/Website/ContactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/Website/Calendar">Calendar</Nav.Link>
                    <Nav.Link href="/Website/Performances">Performances</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Navigation


