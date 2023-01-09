import React from "react";
import StartPage from "./StartPage";
import MiddlePage from "./MiddlePage";
import EndPage from "./EndPage";

class Quiz extends React.Component {
    state: StateInterface = {
        phase: "start",
        endPage: 0,
    };

    finishHandler = (endpage: number) => {
        this.setState({
            phase: "end",
            endPage: endpage
        });
    };

    startHandler = () => {
        this.setState({
            phase: "middle"
        });
    };

    restartHandler = () => {
        this.setState({
            phase: "start"
        });
    };

    render() {
        const {phase, endPage} = this.state;
        if (phase === "start") {
            return (<StartPage startHandler={this.startHandler}/>);
        } else if (phase === "middle") {
            return (<MiddlePage finishHandler={this.finishHandler}/>);
        } else if (phase === "end") {
            return (<EndPage endPage={endPage} restartHandler={this.restartHandler}/>);
        }
    }
}

interface StateInterface {
    phase: String;
    endPage: number
}

export default Quiz;
