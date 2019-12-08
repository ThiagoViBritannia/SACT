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
  <u>Cadastro de Avaliadores</u></h1>
</div>
     <table align = "center" >
      <tr >
        <td style={{width:"50%"}}>
        <h2> 1. Nome</h2>
        <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
</Box>
        <h2> 2. Area de Atuação </h2>
        <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
</Box>
        
        <h2> 3. Instituição que representa </h2>
        <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
</Box>
        
        <h2> 4. Telefone </h2>
         <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
</Box>
        
        <h2> 5. E-mail </h2>
        <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
</Box>
        <h2> 6. CPF </h2>
        <Box horizontal = "15px" vertical="10px"> 
        <input type="text" name="Avaliador" className="Field" placeholder = "" /> 
</Box>
        <h5> 7. Projetos que irá avaliar </h5>
        <form onSubmit={this.handleSubmit}>
        
        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
       <h2>  {`${idx + 1}ª `}
       <Box horizontal = "15px" vertical="10px"> 
            <input
              type="text"
              value={shareholder.name}
              name="usuario"
              className="field"
              onChange={this.handleShareholderNameChange(idx)}
            /></Box>
            <img src={lix} style={{width:"4%"}} onClick={this.handleRemoveShareholder(idx)}></img></h2>
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
