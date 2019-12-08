import React from 'react';

import '../css/WindowManager.css';

import exit from '../css/assets/exit.png';
import adm from '../css/assets/admin.png';
import Login from './Login';



class WindowManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackWindow = this.handleBackWindow.bind(this)
    this.nextWindow = this.nextWindow.bind(this);
  }
  renderBack() {
    return (
      <img id="back" onClick={this.handleBackWindow} src={exit} alt='exit' />
    );
  }
  handleBackWindow(e) {
    if (this.logoutOnBackWindow()) {
      this.setState({
        windows: [
          <Login tmp controller={this.nextWindow}/>
        ]
      })
      return;
    }
    if (this.state.windows.length > 1)
      this.setState({
        windows: this.state.windows.slice(0, this.state.windows.length - 1),
      })
  }

  nextWindow(window) {
    if (this.tmpWindow()) {
      if (this.state.windows.length == 1) {
        this.state.windows.pop()
      } else {
        this.setState({
          windows: this.state.windows.slice(0, this.state.windows.length - 1),
        })
      }
    }
    this.setState({
      windows: this.state.windows.concat(window)
    })
  }


  logoutOnBackWindow() {
    return this.getWindow().props.logoutOnBack;
  }

  getWindow() {
    return this.state.windows[this.state.windows.length - 1]; 
  }

  tmpWindow() {
    return this.getWindow().props.tmp;
  }

  renderSeaseonInfo() {
    return (
      <table>
        <tr>
          {
            !this.tmpWindow()?
              <td><text id='logout'>Logout</text></td> :
              null
          }

          <td id='x1' style={{width:'fit-content'}}><img id='adm-logo' src={adm} alt='admin' /></td>
          <td><text id='adm'>ADM</text> </td>
          
        </tr>
      </table>
    );
  }

  render() {
    return (
      <table aling='top' style={{width: '100%'}}>
        <tr>
          {
            !this.tmpWindow()?
              <td id='back-container'>
                {this.renderBack()}
              </td> :
              null
          }
          <td style={{width: 'max-content'}}>
            {this.getWindow()}
          </td>
          <td id='season-containder'>
            {this.renderSeaseonInfo()}
          </td>
        </tr>
      </table>
    );
  }
}

export default WindowManager;