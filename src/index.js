import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import Lister from './screen/Lister';
=======

>>>>>>> f9f5350619ad4f995742dbb3eb00fec1975d8dbb
import Login from './screen/Login';
import Add from './screen/AddProject';
import WindowManager from './screen/WindowManager';
<<<<<<< HEAD
import * as serviceWorker from './serviceWorker';
import * as DBValues from './db/Values';
var type = "administrator";
=======
import Dashboard from './screen/Dashboard';

import * as serviceWorker from './serviceWorker';
>>>>>>> f9f5350619ad4f995742dbb3eb00fec1975d8dbb

class Main extends WindowManager {
  constructor(props) {
    super(props);
    this.state = { 
      windows: [
<<<<<<< HEAD
        <Add/>
    ] 
=======
        <Login controller={ev => this.nextWindow(<Dashboard controller={this.nextWindow}/>)}/>,
      ] 
>>>>>>> f9f5350619ad4f995742dbb3eb00fec1975d8dbb
    };   
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
