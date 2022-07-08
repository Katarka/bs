import React from "react";
import Slider from "./Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ocean from "../ocean.jpg"
import Jumbotron from "./Jumbotron";

const Home = () => (
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={ocean}/>
                        <Card.Body>
                            <Card.Title>Hey guys</Card.Title>
                            <Card.Text>More text...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={ocean}/>
                        <Card.Body>
                            <Card.Title>Hey guys</Card.Title>
                            <Card.Text>More text...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={ocean}/>
                        <Card.Body>
                            <Card.Title>Hey guys</Card.Title>
                            <Card.Text>More text...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={ocean} height={400}/>
                </Col>
                <Col md={5}>
                    <h2>Hello guys</h2>
                    <p>
                        Text more...
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)

export default Home