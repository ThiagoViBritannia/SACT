import React from 'react';
import logo from '../css/assets/aaa.png';
import Content from './component/Content.js';
import Popup from 'reactjs-popup'
import Dashboard from './Dashboard';

import '../css/Login.css'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return(
      <div className="App" >
        <div align="center">
          <img src={logo} />
        </div>
      
      <div className="usuario" align ="center">
      </div>
      <div className="senha" align ="center">
        <input type="text" className='input-field'  name="usuario" id='user'  placeholder=" CPF"/>
        <input type="password" className='input-field' name="senha" id="password" placeholder=" Senha"/>
        <div >
        <Popup modal trigger={<text id='pass-forgot'>Esqueceu a senha?</text>}>
          {close => <Content close={close} />}
        </Popup>
        </div>
      </div>  
        <div className="button" align="center" >
          <input onClick={() => this.props.controller(<Dashboard />)} type="button" name="login" id="login" value="Entrar" style={{width:"7.8%"}} />
        </div>
      </div> 
    );
  }
}

export default Login;
