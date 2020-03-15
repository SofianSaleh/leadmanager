import React from 'react'
import ReactDom from "react-dom";

class App extends Component {
    render() {
        return <h1>Hello from the new world</h1>
    }
}

ReactDom.render(<App />, document.getElementById('app'))