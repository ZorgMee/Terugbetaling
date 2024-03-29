import React from 'react';
import './App.scss';
import logo from './zm-logo.svg'
import {Card, Col, Container, Row} from "react-bootstrap";
import Quiz from "./Quiz";

function App() {
    return (
        <div className="App bs-styles">
            <Card className="Card">
                <Card.Header>Bereken jouw terugbetaling</Card.Header>
                <Card.Body className="CardBody">
                    <Quiz/>
                </Card.Body>
                <Card.Footer className="Footer">
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <a href="https://www.zorgmee.be" target="_parent">
                                    <img className="App-logo" src={logo} alt="ZorgMee"/>
                                </a>
                            </Col>
                            <Col style={{margin: "auto"}}>
                                {"Deze tool gratis op jouw website? Klik "}
                                <a className="link-primary" href="https://www.zorgmee.be/terugbetaling-zelf-op-je-website" target="_parent">hier</a>
                                {" voor meer info."}
                            </Col>
                        </Row>
                    </Container>
                </Card.Footer>
            </Card>

        </div>
    );
}

export default App;
