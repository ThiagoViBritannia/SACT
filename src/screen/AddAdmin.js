import React from 'react';
import  '../css/AddAdmin.css';

function Header() {
  return (
      <table align ='center' style={{width:'100%'}}>
        <tr>
          <td align='center' style={{width:'100%'}}>
            <div align='center'>
              <h3 align='center'>
                Cadastro de Administrador
                <hr style={{width:'50%',marginTop:"-0.6%"}} ></hr>
              </h3>
            </div>
          </td>
        </tr> 
      </table>
  );
}

function Content() {
  return (
      <table align='center'  style={{width:"100%"}}>
        <tr>
          <td>
            <h4> 1. Nome </h4>
            <input type='text' name='Nome' placeholder = 'Nome' style={{width: "60%"}} /> 
          </td>
          <td>
            <h4> 3. CPF </h4>
            <input type='text' name='cpf' placeholder='CPF' style={{width: "60%"}}/> 
          </td>
        </tr>
        
        <tr>
          <td> 
            <h4> 2. Area de Atuação </h4>
            <div id='checkboxes' style={{fontSize:"110%"}}>
              <input type='checkbox' name='info'   /> Informática <br />
              <input type='checkbox' name='meca'   /> Mecatrônica <br />
              <input type='checkbox' name='eletro' /> Eletronica  <br />
            </div>
          </td>
        
          <td>
            <h4 className='remargin' > 4. RA</h4>
            <input type='text' name='ra' placeholder=' 123456' style={{width: "60%"}}/>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <h4 className='remargin' > 3. Senha </h4>
            <input type='text' name='senha' placeholder=' 123456'style={{width: "60%"}}/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align ='right'>
            <div className='button'>
              <input type='button'name='login' id='login' value='Login' style={{width: "20%", marginLeft: "-50%" }}></input>
            </div>
          </td>
        </tr>
      </table>
  );
}

function AddAdmin() {
  return (
    <div className='App'>
      <Header />
      <Content />
    </div>
    );
}

export default AddAdmin;
