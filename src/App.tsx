import React from 'react';
import './App.scss';
import MainQuiz from "./MainQuiz";
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <MainQuiz/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
