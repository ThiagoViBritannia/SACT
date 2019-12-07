import React from 'react';
import  '../css/Dash.css';
import r from '../css/assets/r.png';
import q from '../css/assets/q.png';

import s from '../css/assets/som.png';
import trofeu from '../css/assets/trofeu.png';
class Dash extends React.Component{
  
  render(){

   return (
    <div className="App">
      <table  align = "center" style={{width:"100%"}}>
      <tr align = "center">
      <td  align = "center" >
       <h1 align="center"  style={{width:"60%", height:"60%"}}>
         <img align="center" src={trofeu} style={{width:"100%", marginTop:"10% "}}/><br></br>
       <h2 align="center" 
       style={{color:"#0004ff",fontSize:"80%"}} >Ranking</h2> </h1>
       </td>
      <td align = "center" style={{}}>
      <h1 align="center" style={{width:"150%"}}>
        <div className="oi" align="left" style={{color:"#0004ff"}}>
         <img  src={r} style={{width:"6%"}} /> Relatórios</div>
         <hr width="95%"/> 
         <div  align="left"> 
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%"}} > Relatório ranking geral <img align="right" src={q} style={{width:"8passo%", marginTop:"-1%"}}/> </h2>
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%"}} >{" "} Relatório ranking por curso <img align="right" src={q} style={{width:"8%", marginTop:"-1%"}}/> </h2>
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%" }} > Relatório ranking por nota <img align="right" src={q} style={{width:"8%", marginTop:"-1%"}}/> </h2>
 <br/></div> </h1>

       </td></tr>
       <tr>
       <td >
       <h1 align="center"  style={{width:"60%" ,color:"#0004ff", fontWeight:"lighter", fontSize:"150%"}}>
       Fichas já avaliadas
      </h1>
      </td>
      <td align="center">
       <h1 align="center"  style={{width:"60%" ,color:"#0004ff",fontWeight:"lighter", fontSize:"150%"}}>Avaliadores já 
concluiram</h1></td>
    <td align="center">
       <h1  style={{width:"80%"}}>
         <div className="oi" align="left" style={{color:"#0004ff"}}>
         <img  src={s} style={{width:"15%"}} /> Informações</div>
         <hr width="90%"/> 
         <div  align="left"> 
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%"}} > Avaliadores </h2>
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%"}} >{" "} Projetos  </h2>
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%" }} > Fichas de Avaliação </h2>
    <h2 style={{color:"#707070",fontSize:"70%",fontWeight:"lighter",marginLeft:"8%" }} > Administrador </h2>
 <br/></div> </h1></td>
       </tr>
</table>
</div>
    );}}
    export default Dash;
