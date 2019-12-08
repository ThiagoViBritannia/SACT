import React from 'react';
import  '../css/addava.css';
import mais from '../css/assets/mais.png';
import lix from '../css/assets/lix.png';
import Box from '../screen/component/Box';
class AddAval extends React.Component{;
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }]
    };
  }

  // ...

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };
  render(){
  
  return (
    <div className="App">
    
  <div align="center">
<h1 align="center">
  Cadastro de Avaliadores
    
  <hr style={{width:'100%',marginTop:"-0.6%"}} ></hr>
  </h1>
</div>
     <table align = "center" style={{width:"100%"}}>
      <tr >
        <td style={{width:"50%"}}>
        <h2> 1. Nome</h2>
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
        <h2> 2. Area de Atuação </h2>
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
        
        <h2> 3. Instituição que representa </h2>
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
        
        <h2> 4. Telefone </h2>
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
        
        <h2> 5. E-mail </h2>
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
        <h2> 6. CPF </h2>
        <h6 >
           <div id='checkboxes'style={{marginTop:"-20%"}}>
              <input type='checkbox' name='info'   /> Informática <br />
              <input type='checkbox' name='meca'   /> Mecatrônica <br />
              <input type='checkbox' name='eletro' /> Eletronica  <br />
            </div></h6></td>
            <td  style={{width:"50%"}}>
        <h2 style={{position:"static"}}> 7. Projetos que irá avaliar </h2>
        <form onSubmit={this.handleSubmit} >
        
        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              value={shareholder.name}
              name="usuario"
              className="field"
              onChange={this.handleShareholderNameChange(idx)}
              
              ></input>
            <img  align = "right" src={lix} style={{width:"4.5%", marginTop:"2.8%", marginLeft:"-15%"}} onClick={this.handleRemoveShareholder(idx)}></img>
             </div>
        ))}
        <div  align = "center">
       <img align = "center"src={mais} style={{width:"5%"}}
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
     
        /></div>
      </form>
      <h5> 8. Status do avaliador </h5>
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 

      <div className="button" align="right">
<input type="button"name="login" id="login" value="Salvar"></input></div>
    </td>
        </tr>
      </table>
      
</div>
    );}}
    export default AddAval;
