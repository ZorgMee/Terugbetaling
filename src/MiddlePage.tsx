import React from "react";
import {Button, ButtonGroup, Col, Container, Row, ToggleButton} from "react-bootstrap";

import {quizData} from "./quizData";

class MiddlePage extends React.Component<MiddlePageProps> {
    state: StateInterface = {
        currentQuestion: "start",
        previousQuestions: [],
        myAnswer: null,
        options: [],
        disabled: true,
        question: quizData[0],
    };

    loadQuizData = () => {
        let question = quizData.find(q => q.id === this.state.currentQuestion)
        question = question ? question : {id: 'error', question: 'Oeps, er ging iets mis', options: []}
        let options = question.options

        this.setState(() => {
            return {
                question: question,
                options: options
            };
        });
    };

    componentDidMount() {
        this.loadQuizData();
    }

    nextQuestionHandler = () => {
        const {myAnswer, previousQuestions, currentQuestion} = this.state;
        previousQuestions.push(currentQuestion)


        this.setState({
            previousQuestions: previousQuestions,
            currentQuestion: myAnswer?.nextQuestionId
        });
    };

    componentDidUpdate(prevProps: any, prevState: { currentQuestion: string; }) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.loadQuizData();
            this.setState(() => {
                return {
                    disabled: true,
                };
            });
        }
    }

    finishHandler = () => {
        const endPage = this.state.myAnswer ? this.state.myAnswer.nextQuestionId : ""
        this.props.finishHandler(endPage)
    };

    previousQuestionHandler = () => {
        const {previousQuestions} = this.state;
        let prevQuestion = previousQuestions.pop()

        this.setState({
            myAnswer: null,
            previousQuestions: previousQuestions,
            currentQuestion: prevQuestion
        });
    }


    render() {
        const {options, currentQuestion, myAnswer} = this.state;
        return (
            <Container>
                <Row>
                    <h2>{this.state.question.question} </h2>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <ButtonGroup vertical className="d-flex OptionPicker">
                            {options.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant="outline-primary"
                                    name="radio"
                                    value={idx}
                                    checked={myAnswer === radio}
                                    onChange={(e) => {
                                        this.setState({
                                            myAnswer: options[e.target.value as unknown as number],
                                            disabled: false
                                        })
                                    }}
                                >
                                    {radio.answer}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        {currentQuestion !== 'start' && (
                            <Button onClick={this.previousQuestionHandler} variant={'secondary'}>
                                Vorige
                            </Button>
                        )}
                    </Col>
                    <Col>
                        {myAnswer?.goToEnd
                            ?
                            <Button disabled={this.state.disabled} onClick={this.finishHandler}
                                    variant={'secondary'}>
                                Resultaat
                            </Button>
                            :
                            <Button disabled={this.state.disabled} onClick={this.nextQuestionHandler}
                                    variant={'secondary'}>
                                Volgende
                            </Button>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

interface StateInterface {
    question: Question;
    currentQuestion: string;
    previousQuestions: Array<string>
    options: Array<QuestionOption>;
    myAnswer: QuestionOption | null;
    disabled: boolean;
}

interface Question {
    id: string;
    question: string;
    options: Array<QuestionOption>
}

interface QuestionOption {
    answer: string
    nextQuestionId: string
    goToEnd: boolean
}

interface MiddlePageProps {
    finishHandler: (endpage: string) => void,
}


export default MiddlePage;
