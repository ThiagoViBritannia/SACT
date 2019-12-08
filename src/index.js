import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Lister from './screen/Lister';
import Login from './screen/Login';
<<<<<<< HEAD
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
=======
import WindowManager from './screen/WindowManager';

import * as serviceWorker from './serviceWorker';
import * as DBValues from './db/Values';
>>>>>>> 7272041cb9017ee3e2ce673eb41321f9b9fa9a0a


var type = "administrator";

class Main extends WindowManager {
  constructor(props) {
    super(props);
    this.state = { 
      windows: [
        <Login controller={ev => this.nextWindow(<Lister type={DBValues.ADMIN} controller={this.nextWindow}/>)}/>,
      ] 
    };   
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
