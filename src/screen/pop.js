import React from "react";

import  '../css/sty.css';
export default ({ close }) => (
  <div className="modal" >
 <div className="c"></div>
  
    <div className="content" >
      {" "}
      <h1 align="right"  onClick={close} style={{fontSize:"150%", marginRight:"10%",color:"#0004ff"}}>X</h1>A sua nova senha foi <br/> enviada para o e-mail <br/>cadastrado de acordo <br/>
            com o CPF informado! <br/>
    </div>
    <input type="button" name="login" id="login" value="OK"  onClick={close} style={{fontWeight:"bolder"}}/>
      
  </div>
);