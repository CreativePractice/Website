import "bootswatch/dist/lumen/bootstrap.min.css";
import React from 'react'
import { Card, CardDeck, Col} from "react-bootstrap";
import img from "../images/Sample.jpg";

const Cards = () => {
    return (
        <div>
            <h3>Co-Presidents</h3>
            <br></br>
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
                        <Card.Title>Ally Fraser</Card.Title>
                        <Card.Text>
                            allysfraser@ufl.edu
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Alee Danyluk</Card.Title>
                        <Card.Text>
                            adanyluk@ufl.edu
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Col></Col>
                <Col></Col>
            </CardDeck>
            <br></br>
            <h3>Treasurer</h3>
            <br></br>

            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Jackson Brunner</Card.Title>
                        <Card.Text>
                            jackson.brunner@ufl.edu
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </CardDeck>
        </div>
    )
}

export default Cards