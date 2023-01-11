import React from "react";
import StartPage from "./StartPage";
import MiddlePage from "./MiddlePage";
import EndPage from "./EndPage";

class Quiz extends React.Component {
    state: StateInterface = {
        phase: "start",
        endPage: 'cm-end',
    };

    finishHandler = (endpage: string) => {
        this.setState({
            phase: "end",
            endPage: endpage
        });
    };

    nextPhase = (phase:string) => {
        return(() => {
            this.setState({
                phase: phase
            });
        });
    };

    render() {
        const {phase, endPage} = this.state;
        if (phase === "start") {
            return (<StartPage startHandler={this.nextPhase("middle")}/>);
        } else if (phase === "middle") {
            return (<MiddlePage finishHandler={this.finishHandler}/>);
        } else if (phase === "end") {
            return (<EndPage endPage={endPage} restartHandler={this.nextPhase("start")}/>);
        }
    }
}

interface StateInterface {
    phase: String;
    endPage: string
}

export default Quiz;
