import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {endData} from "./quizData";

class EndPage extends React.Component<EndPageProps> {

    render() {
        const data = endData[this.props.endPage]

        return (
            <Container>
                <Row>
                    <h2> {data.header}</h2>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <p> {data.paragraph}</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Button onClick={this.props.restartHandler} variant={'secondary'}>
                            Opnieuw beginnen
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

interface EndPageProps {
    endPage: number,
    restartHandler: () => void
}

export default EndPage;
