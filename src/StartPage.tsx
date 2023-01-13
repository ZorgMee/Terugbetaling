import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

class StartPage extends React.Component<StartPageProps> {

    render() {
        const startHandler = this.props.startHandler

        return (
            <Container>
                <Row>
                    <h2> Welkom bij deze quiz </h2>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <p>Bepaal in minder dan 1 minuut op hoeveel terugbetaling je recht hebt.</p>
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
