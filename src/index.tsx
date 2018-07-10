import * as React from "react";
import * as ReactDOM from "react-dom";
import {CustomTextInput} from "./CustomTextInput";
import Hello from "./Hello";


interface AppState {

}

interface AppProps {

}

class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <main>
                <h1>HELLO WORLD</h1>
                <CustomTextInput/>
            </main>

        );
    }

}

ReactDOM.render(<App />, document.getElementById("container"));