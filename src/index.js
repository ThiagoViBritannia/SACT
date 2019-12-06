import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Lister from './screen/Lister';
import Login from './screen/Login';
import Add from './screen/Add';

import * as serviceWorker from './serviceWorker';
import * as DBValues from './db/Values';



class WindowManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            windows: [
                <Lister type={DBValues.PROJECT} controller={this.nextWindow} />, 
//                <Add type={DBValues.ADMIN}/>,
//                <Login />
            ] 
        };   
        this.handleBackWindow = this.handleBackWindow.bind(this)
    }
    renderBack() {
        return (
            <button id="back" onClick={this.handleBackWindow}></button>
        );
    }
    handleBackWindow(e) {
        this.setState({
            windows: this.state.windows.slice(0, this.state.windows.length - 1),
        })
    }

    nextWindow(window) {
        this.setState({
            window: this.state.windows.concat(window)
        })
    }

    renderWindow() {
        return this.state.windows[this.state.windows.length - 1]; 
    }

    render() {
        return (<div>{this.renderBack()}{this.renderWindow()}</div>);
    }
}

ReactDOM.render(<WindowManager />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
