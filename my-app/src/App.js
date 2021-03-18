
import "bootswatch/dist/lumen/bootstrap.min.css";
import { Navbar, Nav} from "react-bootstrap";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Creative Practices</Navbar.Brand>
        <Nav className="mr-auto active">
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          <Nav.Link href="#Calendar">Calendar</Nav.Link>
          <Nav.Link href="#Performances">Performances</Nav.Link>
        </Nav>
      </Navbar>
  
    </div>
  );
}

export default App;