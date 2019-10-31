import React from "react";

interface TestComponentProps {

    runUntil: number;

    onTimerChange: (newValue: number) => void;

}

interface TestComponentState {

    currentTimerTime: number;

}


export class TestComponent extends React.Component<TestComponentProps, TestComponentState> {


    constructor(props: TestComponentProps) {
        super(props);

        this.state = {
            currentTimerTime: 0
        };
        let intervalId = setInterval(() => {
            this.setState({
                currentTimerTime: this.state.currentTimerTime + 10
            });
            if (this.state.currentTimerTime >= this.props.runUntil) {
                clearInterval(intervalId);
            }
            this.props.onTimerChange(this.state.currentTimerTime);
        }, 10);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                Timer Value: I DONT KNOW
            </div>
        );
    }

}