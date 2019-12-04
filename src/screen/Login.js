import React from 'react';
import  '../css/Login.css';
import logo from '../css/assets/logo.png';

function Login() {
  return (
    <div className="Login" >
      
        <img src={logo} id="logo" alt="logo"></img>
      

      <div className="senha" >
        
        <input type="text" className="field" name="usuario"  placeholder=" CPF"/><br />
        <input type="password" className="field" name="senha"  placeholder=" Senha"/><br />
      
        <div className="esqueceu_senha" >
          Esqueceu sua senha?
        </div><br/>
      
      </div>  
       
      <input type="button" name="login" className="button" id="login" value="Entrar" />
     </div> 
  );
/*
<table><tr align="center"> </tr></table>
*/
}
export default Login;
