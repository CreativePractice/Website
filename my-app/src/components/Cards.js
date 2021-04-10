import "bootswatch/dist/lumen/bootstrap.min.css";
import React from 'react'
import { Card, CardDeck, Row } from "react-bootstrap";
import img from "../images/ShawnDiertl.png";
import img2 from "../images/AllyFraser.png";
import img3 from "../images/AleeDanyluk.jpg";
import img4 from "../images/JacksonBrunner.png";

const Cards = () => {
    return (
        <div>
            <CardDeck className="justify-content-center">
                <Row className="justify-content-center">
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Shawn Diertl</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Co-President</Card.Subtitle>
                            <Card.Text>
                                sdiertl@ufl.edu
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Ally Fraser</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Co-President</Card.Subtitle>
                            <Card.Text>
                                allysfraser@ufl.edu
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Alee Danyluk</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Co-President</Card.Subtitle>
                            <Card.Text>
                                adanyluk@ufl.edu
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>Jackson Brunner</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Treasurer</Card.Subtitle>
                            <Card.Text>
                                jackson.brunner@ufl.edu
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </CardDeck>
        </div>
    )
}

export default Cards