import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

class StartPage extends React.Component<StartPageProps> {

    render() {
        const startHandler = this.props.startHandler

        return (
            <Container>
                <Row>
                    <h2> Welkom, bij deze tekst </h2>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <p> een beetje uitleg over de quiz</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Button onClick={startHandler} variant={'secondary'}>
                            Beginnen
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

interface StartPageProps {
    startHandler: () => void,
}

export default StartPage;
