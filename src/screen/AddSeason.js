import React from 'react';
import  '../css/AddSeason.css';
import mais from '../css/assets/mais.png';
import lix from '../css/assets/lix.png';
class AddSeason extends React.Component{;
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
<h3>
  <u>Cadastro de Seção</u></h3>
</div>
        <form onSubmit={this.handleSubmit}>
        
        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
       <h2>{`${idx + 1}ª Seção`}</h2>
            <input
              type="text"
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
              style={{width:"80%"}} 
            /><img src={lix}  style={{width:"3%"}} onClick={this.handleRemoveShareholder(idx)}></img>
             </div>
        ))}
       <img src={mais} style={{width:"4%",marginLeft:"40%", marginTop:"5%"}}
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
     
        />
      </form>
      <div className="button" align="right">
<input type="button"name="login" id="login" value="Salvar"></input></div>
      </div>
      

    );}}
    export default AddSeason;
