import React from 'react';
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
