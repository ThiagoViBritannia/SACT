import React from "react";

import  '../../css/Content.css';

export default ({ close }) => (
  <div className="modal" >
  <div className="c"></div>
  
    <div className="content" >
      {" "}
      <h1 id='close-button' align="right"  onClick={close} >X</h1>
      A sua nova senha foi <br/>
      enviada para o e-mail <br/>
      cadastrado de acordo <br/>
      com o CPF informado! <br/>
    </div>
    <input type="button" name="login" id="login" value="OK"  onClick={close} style={{fontWeight:"bolder"}} />
      
  </div>
);