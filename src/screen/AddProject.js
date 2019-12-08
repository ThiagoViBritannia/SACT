import React from 'react';
import  '../css/project.css';
import Box from '../screen/component/Box';
function App() {
  return (
    <div className="App">
    
<h1 align="center">
  Cadastro de projetos
  <hr style={{width:'50%',marginTop:"-0.6%"}} ></hr></h1>
<table align = "center" style={{width:"100%"}}>
      <tr >
        <td style={{}}>
        <h2> 1. Nome</h2>
        <input type="text" name="projeto" className="Field" placeholder = "" /> 

        <h2> 2. Area de Atuação </h2>
        <h6 >
           <div id='checkboxes'>
              <h6></h6><input type='checkbox' name='info'   /> Informática <br />
              <h6></h6><input type='checkbox' name='meca'   /> Mecatrônica <br />
              <h6></h6><input type='checkbox' name='eletro' /> Eletronica  <br />
            </div></h6>
        <h2> 3. Turma </h2> 
        <input type="text" name="projeto" className="Field" placeholder = "" /> 

        </td><td >
        <h5> 4. Integrantes </h5>
       <h7>   
        <input type="text" name="projeto" className="Field" placeholder = "" /> <br/>
</h7>
       <h7 style={{marginTop:"100%"}}>  
        <input type="text" name="projeto" className="Field" placeholder = "" style={{marginTop:"5%"}}/> <br/>
   </h7>
       <h7>     
         
        <input type="text" name="projeto" className="Field" placeholder = "" style={{marginTop:"5%"}}/> <br/>
 </h7>
       <h5> 9. Observações </h5> 
        <input type="text" name="projeto" className="Field" placeholder = "" /> 
</td>
        </tr><tr>
        <td> </td><td>
          
      <div className="button" align="right">
<input type="button"name="login" id="login" value="Salvar"></input></div>
    </td>
        </tr>
      </table>
      
    </div>

    );}
    export default App;
