import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Lister from './screen/Lister';
import Login from './screen/Login';
import WindowManager from './screen/WindowManager';
import Dashboard from './screen/Dashboard';

import * as serviceWorker from './serviceWorker';
import * as DBValues from './db/Values';

class Main extends WindowManager {
  constructor(props) {
    super(props);
    this.state = { 
      windows: [
        <Login controller={ev => this.nextWindow(<Lister type={DBValues.ADMIN} controller={this.nextWindow}/>)}/>,
        <Dashboard controller={this.nextWindow}/>
      ] 
    };   
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
