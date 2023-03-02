import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

class StartPage extends React.Component<StartPageProps> {

    render() {
        const startHandler = this.props.startHandler

        return (
            <Container>
                <Row>
                    <h2> Terugbetalingstool </h2>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <p>Kom anoniem te weten of je recht hebt op een stukje terugbetaling voor psychologische hulp, door het invullen van enkele vragen via de terugbetalingstool.</p>
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
