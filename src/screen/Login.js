import React from 'react';
<<<<<<< HEAD
import Box from './component/Box';

import  '../css/Login.css';

import logo from '../css/assets/logo.png';

function Login(props) {
  return (
    <div className="Login" >
      
        <img src={logo} id="logo" alt="logo"></img>
      

      <div className="senha" >
        
        <Box horizontal='15px' vertical='10px'><input type="text" className="field" name="usuario"  placeholder=" CPF"/><br /></Box>
        <Box horizontal='15px' vertical='10px'><input type="password" className="field" name="senha"  placeholder=" Senha"/><br /></Box>
      
        <div className="esqueceu_senha" >
          Esqueceu sua senha?
        </div><br/>
      
      </div>  
       
      <input type="button" onClick={props.controller} name="login" className="button" id="login" value="Entrar" />
     </div> 
  );
}
export default Login;
=======
import  '../css/sty.css';
import logo from '../css/assets/aaa.png';
import Content from './pop.js';
import Popup from 'reactjs-popup'
class Login extends React.Component {
  constructor(props) {
    super(props);
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
<img src={logo}></img>
</div>
    <div className="usuario" align ="center">
    <input type="text" name="usuario"  placeholder=" CPF"/>
  </div>
  <div className="senha" align ="center">
    <input type="password" name="senha" id="password" placeholder=" Senha"/>
    <div >
    <Popup modal trigger={<text>Esqueceu a senha?</text>}>
        {close => <Content close={close} />}
      </Popup>
           
      
       
    </div>
  </div>  
    
    
     <div className="button" align="center" >
     <input type="button" name="login" id="login" value="Entrar" style={{width:"7.8%"}}>
    </input></div>
</div> 

);}}
    export default Login;
>>>>>>> 65cdfec1b8723c656a82d37fe058fbe268a05c3f
