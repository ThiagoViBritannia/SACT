import React from 'react';
import  '../css/AddProject.css';
import Box from '../screen/component/Box';
function App() {
  return (
    <div className="App">
    
<h1 align="center">
  <u>Cadastro de projetos</u></h1>
<table align = "center" >
      <tr >
        <td style={{width:"50%"}}>
        <h2> 1. Nome</h2>
        <Box horizontal = "15px" vertical="10px"> 
          <input type="text" name="projeto" className="Field" placeholder = "" /> 
        </Box>
        <h2> 2. Area de Atuação </h2>
        <h6 >
           <div id='checkboxes'>
              <input type='checkbox' name='info'   /> Informática <br />
              <input type='checkbox' name='meca'   /> Mecatrônica <br />
              <input type='checkbox' name='eletro' /> Eletronica  <br />
            </div></h6>
        <h2> 3. Turma </h2>
          <Box horizontal = "15px" vertical="10px"> 
            <input type="text" name="projeto" className="Field" placeholder = "" /> 
          </Box>
        </td><td >
        <h5> 4. Integrantes </h5>
       <h7>    <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="projeto" className="Field" placeholder = "" /> 
</Box> </h7>
       <h7 style={{marginTop:"100%"}}>  <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="projeto" className="Field" placeholder = "" style={{marginTop:"5%"}}/> 
</Box> />  </h7>
       <h7>     <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="projeto" className="Field" placeholder = "" style={{marginTop:"5%"}}/> 
</Box>  </h7>
       <h5> 9. Observações </h5> <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="projeto" className="Field" placeholder = "" /> 
</Box>  </td>
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
