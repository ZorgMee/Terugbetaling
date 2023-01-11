import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {endData, quizData} from "./quizData";

class EndPage extends React.Component<EndPageProps> {

    render() {
        let data = endData.find(d => d.id === this.props.endPage)
        data = data ? data : {id: 'error', header: 'Oeps', paragraph: 'Er ging iets mis'}

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
    endPage: string,
    restartHandler: () => void
}

export default EndPage;
