import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Lister from './screen/Lister';
import Login from './screen/Login';
import Seção from './screen/Seção';
import Dash from './screen/dashboard';
import Avcad from './screen/AddAval';
import AddAdmin from './screen/AddAdmin'

var type = "administrator";

class WindowManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windows: [<Lister name={type} />, <Avcad />] };   
        this.handleBackWindow = this.handleBackWindow.bind(this)
    }
    renderBack() {
        return (
            <button id="back" onClick={this.handleBackWindow}></button>
        );
    }
    handleBackWindow(e) {
        console.log(e)
        this.setState({
            windows: this.state.windows.pop()
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
    return (<div>{this.renderWindow()}</div>);
    }
}

ReactDOM.render(<WindowManager />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
