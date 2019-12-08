import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Login from './screen/Login';
import WindowManager from './screen/WindowManager';
import Dashboard from './screen/Dashboard';

import * as serviceWorker from './serviceWorker';

class Main extends WindowManager {
  constructor(props) {
    super(props);
    this.state = { 
      windows: [
        <Login tmp controller={this.nextWindow}/>,
      ] 
    };   
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
