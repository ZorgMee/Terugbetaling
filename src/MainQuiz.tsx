import React from "react";
import {Button, Col, Container, Row, ToggleButton, ButtonGroup} from "react-bootstrap";

import {quizData} from "./quizData";

class MainQuiz extends React.Component {
    state: StateInterface = {
        currentQuestion: 0,
        previousQuestions : [],
        myAnswer: null,
        options: [],
        disabled: true,
        isEnd: false,
        question: quizData[0],
    };

    loadQuizData = () => {
        this.setState(() => {
            return {
                question: quizData[this.state.currentQuestion],
                options: quizData[this.state.currentQuestion].options
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

    componentDidUpdate(prevProps: any, prevState: { currentQuestion: number; }) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    question: quizData[this.state.currentQuestion],
                    options: quizData[this.state.currentQuestion].options,
                };
            });
        }
    }

    finishHandler = () => {
        if (this.state.currentQuestion === quizData.length - 1) {
            this.setState({
                isEnd: true
            });
        }
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
        const {options, currentQuestion, isEnd, myAnswer} = this.state;

        if (isEnd) {
            return (
                <div  className="result">
                    <h3>Game Over your Final score is points </h3>
                    <div>
                        The correct answer's for the questions was
                        {/*                     <ul>
                            {quizData.map((item, index) => (
                                <li className="ui floating message options" key={index}>
                                    {item.answer}
                                </li>
                            ))}
                        </ul>*/}
                    </div>
                </div>
            );
        } else {

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
                                            })}}
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
                                {currentQuestion > 0 && (
                                    <Button onClick={this.previousQuestionHandler} variant={'secondary'}>
                                        Vorige
                                    </Button>
                                )}
                            </Col>
                            <Col>
                                {currentQuestion < quizData.length - 1 && (
                                    <Button disabled={this.state.disabled} onClick={this.nextQuestionHandler} variant={'secondary'}>
                                        Volgende
                                    </Button>
                                )}
                            </Col>
                        </Row>
                    </Container>
            );
        }
    }


}

interface StateInterface {
    question: Question;
    currentQuestion: number;
    previousQuestions: Array<number>
    options: Array<QuestionOption>;
    myAnswer: QuestionOption | null;
    disabled: boolean;
    isEnd: boolean;
}

interface Question {
    id: number;
    question: string;
    options: Array<QuestionOption>
}

interface QuestionOption {
    answer: string
    nextQuestionId: number
}


export default MainQuiz;
