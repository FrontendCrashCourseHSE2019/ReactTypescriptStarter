import React, {ReactNode} from "react";

interface InputComponentState {

    currentValue: string;

}

interface InputComponentProps {

    onNewTodoCreated: (title: string) => void;

}

export class InputComponent extends React.Component<InputComponentProps, InputComponentState> {

    constructor(props: Readonly<InputComponentProps>) {
        super(props);
        this.state = {
          currentValue: ""
        };
    }

    handleChanges(newStringValue: string) {
        this.setState({
            currentValue: newStringValue
        });
    }

    handleSave() {
        this.props.onNewTodoCreated(this.state.currentValue);
    }

    render(): ReactNode {
        return (
            <div>
                <input placeholder={"Enter new title"} onChange={event => this.handleChanges(event.target.value)} value={this.state.currentValue}/>
                <button onClick={event => this.handleSave()}>Save</button>
            </div>
        );
    }

}
