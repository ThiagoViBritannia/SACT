import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
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


var type = "administrator";
=======

import Lister from './screen/Lister';
import Login from './screen/Login';
import WindowManager from './screen/WindowManager';
import Dashboard from './screen/Dashboard';

import * as serviceWorker from './serviceWorker';
import * as DBValues from './db/Values';
>>>>>>> bde4b080c669b5ec726e280a98c327232c4db0f0

class Main extends WindowManager {
  constructor(props) {
    super(props);
    this.state = { 
      windows: [
        <Login controller={ev => this.nextWindow(<Dashboard controller={this.nextWindow}/>)}/>,
      ] 
    };   
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
