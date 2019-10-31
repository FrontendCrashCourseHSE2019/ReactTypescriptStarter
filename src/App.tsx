import React, {ReactNode} from 'react';
import logo from './logo.svg';
import './App.css';
import {TestComponent} from "./Test";
import {InputComponent} from "./InputComponent";

class ToDoItem {

    title: string;

    constructor(title: string) {
        this.title = title;
    }

}

interface AppState {

    items: ToDoItem[];

}

export class App extends React.Component<{}, AppState> {


    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            items: []
        };
    }

    onNewTodoHandle(title: string) {
        let newTodoItem = new ToDoItem(title);
        this.setState({
            items: [...this.state.items, newTodoItem]
        });
    }

    render(): ReactNode {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <InputComponent onNewTodoCreated={title => this.onNewTodoHandle(title)}/>

                    {this.state.items.map(todoItem => {
                        return (
                            <div>{todoItem.title}</div>
                        )
                    })}

                </header>
            </div>
        );
    }

};

export default App;
