import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container} from 'reactstrap';
import { Card, CardDeck } from "react-bootstrap";
import img from "../images/Sample.jpg";



const AboutUs = () => {
    return (
        <div>
                <Jumbotron fluid>
                    <Container>
                    <h1>About Us</h1>
                    
                    <p>
                        Created in 2005, White Coat Company is an organization that 
                        writes and rehearses plays put on for patients at the local Children’s Hospital. 
                        We also perform these productions for our peers on Family and Friends Weekend each year. 
                        Our main goal is to entertain children who are stuck in the hospital all day! 
                        Medical students devote their free time to memorizing lines, rehearsing, creating costumes, 
                        and making props for the show. Not only is it a fantastic way to provide joy to pediatric 
                        patients, but it provides medical students with an artistic outlet. We hope to see you at one of our upcoming shows!

                    </p>
                    <h2 style={{textAlignVertical: "center",textAlign: "center"}}> Club Leaders</h2>

                    <h3>Co-Presidents</h3>
                    <CardDeck>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Shawn Diertl</Card.Title>
                                <Card.Text>
                                    sdiertl@ufl.edu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Shawn Diertl</Card.Title>
                                <Card.Text>
                                    sdiertl@ufl.edu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Shawn Diertl</Card.Title>
                                <Card.Text>
                                    sdiertl@ufl.edu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <h3>Treasurer</h3>

                    </Container>
                </Jumbotron>
        </div>
    )
}

export default AboutUs
