import "bootswatch/dist/lumen/bootstrap.min.css";
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container} from 'reactstrap';
import { Col, Row, Image} from "react-bootstrap";
import logo from "../images/Creative_Practice_Sample_icon.png"
import CarouselPics from './CarouselPics';
import Cards from "./Cards";
import ClubPictures from "./ClubPictures";
import img from "../images/FacebookIcon.png";

function myfunction() {
  var win = window.open("https://www.facebook.com/groups/387221978540976/", '_blank');
  if (win != null) {
      win.focus();
    }
}

const AboutUs = () => {
    return (
        <div>
              <Jumbotron fluid>
                  <Container>
                    <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#158cba", fontSize: 70}}>Creative Practice</h1>
                    <Row className="justify-content-center">
                      <Col xs={9} sm={9} md={4}>
                        <Image src={logo} fluid/>
                      </Col>
                    </Row>
                    <br></br>
                    <h1>About Us</h1>
                    
                    <h5>
                        Created in 2005, White Coat Company is an organization that 
                        writes and rehearses plays put on for patients at the local Children’s Hospital. 
                        We also perform these productions for our peers on Family and Friends Weekend each year. 
                        Our main goal is to entertain children who are stuck in the hospital all day! 
                        Medical students devote their free time to memorizing lines, rehearsing, creating costumes, 
                        and making props for the show. Not only is it a fantastic way to provide joy to pediatric 
                        patients, but it provides medical students with an artistic outlet. We hope to see you at one of our upcoming shows!

                    </h5>
                    <h1 style={{textAlignVertical: "center",textAlign: "center"}}>Club Leaders</h1>
                    <br></br>
                    <Cards/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ClubPictures/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </Container>

                  <CarouselPics/>
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

export default AboutUs
