import React from "react";
import {Button, Form} from "react-bootstrap";
import {quizData} from "./quizData";

class MainQuiz extends React.Component {
    state: StateInterface = {
        currentQuestion: 0,
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
        const {myAnswer} = this.state;

        this.setState({
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

    //check answer
    checkAnswer = (answer: QuestionOption) => {
        this.setState({myAnswer: answer, disabled: false});
    };
    finishHandler = () => {
        if (this.state.currentQuestion === quizData.length - 1) {
            this.setState({
                isEnd: true
            });
        }
    };

    render() {
        const {options, currentQuestion, isEnd} = this.state;

        if (isEnd) {
            return (
                <div className="result">
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
            console.log(this.state)

            return (
                <div className="App">
                    <h1>{this.state.question.question} </h1>
                    <Form>
                        <div key={`default-radio`} className="mb-3">
                            {options.map(option => (
                                <Form.Check
                                    key={option.answer}
                                    type={"radio"}
                                    name={"options-group"}
                                    label={option.answer}
                                    onClick={() => this.checkAnswer(option)}
                                />
                            ))}
                        </div>
                    </Form>
                    {currentQuestion < quizData.length - 1 && (
                        <Button
                            className="ui inverted button"
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHandler}
                        >
                            Next
                        </Button>
                    )}
                    {/* //adding a finish button */}
                    {currentQuestion === quizData.length - 1 && (
                        <Button className="ui inverted button" onClick={this.finishHandler}>
                            Finish
                        </Button>
                    )}
                </div>
            );
        }
    }
}

interface StateInterface {
    question: Question;
    currentQuestion: number;
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
