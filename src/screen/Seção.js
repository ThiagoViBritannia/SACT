import React from 'react';
import  '../css/sty2.css';
import mais from '../css/assets/mais.png';
import lix from '../css/assets/lix.png';
class Seção extends React.Component{;
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
<h1 align="center" style={{marginLeft:"10%"}}>
  <u>Cadastro de Seção</u></h1>
</div> <table align = "center" style={{marginTop:"5%",width:"70%"}}>
      <tr align="center">
        <td style={{width:"100%"}}>
 
        <form onSubmit={this.handleSubmit}>
        
        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
       <h2>  {`${idx + 1}ª Seção`}
            <input
              type="text"
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <img src={lix} style={{width:"1.9%"}} onClick={this.handleRemoveShareholder(idx)}></img></h2>
             </div>
        ))}
       <img src={mais} style={{width:"5%"}}
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
     
        />
      </form>
      <div className="button" align="right">
<input type="button"name="login" id="login" value="Salvar"></input></div>
    </td>
        </tr>
      </table>
      
    </div>

    );}}
    export default Seção;
