import React, { Component, Fragment } from 'react'
import ReactDom from "react-dom";
import Header from './layout/header.js'
import Dashboard from './leads/dashboard'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div class="container">
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))