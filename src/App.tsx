import React from 'react';
import './App.scss';
import logo from './zm-logo.svg'
import {Card, Col, Container, Row} from "react-bootstrap";
import Quiz from "./Quiz";

function App() {
    return (
        <div className="App">
            <Card>
                <Card.Header>Bereken jouw terugbetaling</Card.Header>
                <Card.Body>
                    <Quiz/>
                </Card.Body>
                <Card.Footer className="Footer">
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <a href="https://www.zorgmee.be">
                                    <img className="App-logo" src={logo} alt="ZorgMee"/>
                                </a>
                            </Col>
                            <Col style={{margin: "auto"}}>
                                {"Deze tool gratis op jouw website? Klik "}
                                <a className="link-primary" href="https://www.zorgmee.be">hier</a>
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
