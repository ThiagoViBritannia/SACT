import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import exit from './css/assets/exit.png';

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
        <Add type={DBValues.ADMIN}/>,
        <Login />,
        <Lister type={DBValues.PROJECT} controller={this.nextWindow} />, 
      ] 
    };   
    this.handleBackWindow = this.handleBackWindow.bind(this)
  }
  renderBack() {
    return (
      <img id="back" onClick={this.handleBackWindow} src={exit} />
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
    return (<>{this.renderBack()}<div style={{display: 'inline'}}>{this.renderWindow()}</div></>);
  }
}

ReactDOM.render(<WindowManager />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
