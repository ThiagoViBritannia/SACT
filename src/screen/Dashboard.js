import React from 'react';
import Lister from './Lister';

import  '../css/Dash.css';

import r from '../css/assets/r.png';
import q from '../css/assets/q.png';
import s from '../css/assets/som.png';
import trofeu from '../css/assets/trofeu.png';

import * as DBValues from '../db/Values';


const squareStyle={color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%"};
const lineStyle={width:"8%", marginTop:"-1%"};
const style={width:"60%" ,color:"#0004ff", fontWeight:"lighter", fontSize:"150%"};

class Dashboard extends React.Component{
  
  constructor(props) {
    super(props);
    this.props = props;
  }

  render(){
    return (
      <div className="App">
        <table className='Table'  align = "center" style={{width:"100%"}}>
          <tr align = "center">
            <td  align = "center" >
              <h1 align="center" className='dash-view'  style={{width:"60%", height:"60%"}}>
                <img align="center" src={trofeu} style={{width:"100%", marginTop:"10% "}}/><br></br>
                
                <h2 align="center" style={{
                  color:"#0004ff",
                  fontSize:"80%"}} 
                >
                  Ranking
                </h2> 
            
              </h1>
            </td>
            
            <td align = "center" style={{}}>
              <h1 className='dash-view' align="center" style={{width:"150%"}}>
                <div className="oi" align="left" style={{color:"#0004ff"}}>
                  <img  src={r} style={{width:"6%"}} /> 
                  Relatórios
                </div>
                <hr width="95%"/> 
                <div  align="left"> 
                  <h2 style={squareStyle} > Relatório ranking geral <img align="right" src={q} style={lineStyle}/></h2>
                  <h2 style={squareStyle} >{" "} Relatório ranking por curso <img align="right" src={q} style={lineStyle}/></h2>
                  <h2 style={squareStyle} > Relatório ranking por nota <img align="right" src={q} style={lineStyle}/> </h2> <br/>
                </div> 
              </h1>

            </td>
          </tr>
          <tr>
            <td>
              <h1 className='dash-view' align="center"  style={style}>
                Fichas já avaliadas
              </h1>
            </td>
            <td align="center">
              <h1 className='dash-view' align="center"  style={style}>Avaliadores já concluiram</h1>
            </td>
            <td align="center">
              <h1 className='dash-view' style={{width:"80%"}}>
                <div className="oi" align="left" style={{color:"#0004ff"}}>
                  <img  src={s} style={{width:"15%"}} /> 
                  Informações
                </div>
                <hr width="90%"/> 
                <div  align="left"> 
                  <h2 style={squareStyle} onClick={() => this.props.controller(<Lister type={DBValues.AVALIATOR} controller={this.props.controller}/>)}> Avaliadores </h2>
                  <h2 style={squareStyle} onClick={() => this.props.controller(<Lister type={DBValues.PROJECT} controller={this.props.controller}/>)}>{" "} Projetos  </h2>
                  <h2 style={squareStyle} onClick={() => this.props.controller(<Lister type={DBValues.RECORD} controller={this.props.controller}/>)}> Fichas de Avaliação </h2>
                  <h2 style={squareStyle} onClick={() => this.props.controller(<Lister type={DBValues.ADMIN} controller={this.props.controller}/>)}> Administrador </h2><br/>
                </div> 
              </h1>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}


export default Dashboard;
