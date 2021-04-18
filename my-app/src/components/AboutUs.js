import "bootswatch/dist/litera/bootstrap.min.css";
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container} from 'reactstrap';
import { Image} from "react-bootstrap";
import logo from "../images/Creative_Practice_Sample_icon.png"
import CarouselPics from './CarouselPics';
import Cards from "./Cards";
import ClubPictures from "./ClubPictures";
import SocialFollow from "./SocialFollow";

const AboutUs = () => {
    return (
        <div>
              <Jumbotron fluid style={{background:"White"}}>
                  <Container>
                    <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#4782ed", fontSize: 70}}><Image style={{height: "15%", width: "15%"}}src={logo} fluid/>   Creative Practice</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <CarouselPics/>
                    {/* <Row className="justify-content-center">
                      <Col xs={9} sm={9} md={4}>
                        <Image src={logo} fluid/>
                      </Col>
                    </Row> */}
                    <br></br>
                    <br></br>
                    <h1 style={{textAlignVertical: "center",textAlign: "center"}} >About Us</h1>
                    <br></br>
                    
                    <h5>
                        Created in 2005, White Coat Company is an organization that 
                        writes and rehearses plays put on for patients at the local Children’s Hospital. 
                        We also perform these productions for our peers on Family and Friends Weekend each year. 
                        Our main goal is to entertain children who are stuck in the hospital all day! 
                        Medical students devote their free time to memorizing lines, rehearsing, creating costumes, 
                        and making props for the show. Not only is it a fantastic way to provide joy to pediatric 
                        patients, but it provides medical students with an artistic outlet. We hope to see you at one of our upcoming shows!

                    </h5>
                    <br></br>
                    <br></br>
                    <h1 style={{textAlignVertical: "center",textAlign: "center"}}>Club Leaders</h1>
                    <br></br>
                    <br></br>
                    <Cards/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ClubPictures/>
                  </Container>
              </Jumbotron>
            <SocialFollow/>
        </div>
        
    )
}

export default AboutUs
