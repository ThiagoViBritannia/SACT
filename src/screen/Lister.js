import React from 'react';
import Popup from 'reactjs-popup';

import Box from './component/Box';
import AddButton from './component/AddButton';

import pencil from '../css/assets/edit-symbol.png';

import '../css/Lister.css';

import * as db from '../db/Table';



class Search extends React.Component {
  render() {
    return (
      <div className='search-projects'>
        <h2 className='topic'>Pesquisar {db[this.props.data].name}</h2>
        <input className='searcher' type='text'></input>
        <button style={{display: 'inline'}}>Q</button>
      </div>
    );
  }
}

export class Add extends React.Component {
  
  renderDialog() {
    return (<h2 className='topic' id="search">Adicionar {db[this.props.data].name}</h2>);
  }

  renderEdit(key) {

  }

  render () {
    return (
      <>
        {this.renderDialog()}
        <Popup
          trigger={<AddButton />}
          modal
          closeOnDocumentClick
        >
        </Popup>
      </>
    )
  }
}

function List(props) {
  const values = db[props.data].tables().map(
    (value) => {
      return (
        <tr key={value[props.data.key]}>
          {db[props.data].types.map(
            att => <td key={att.toString()}> {value[att]} </td>
          )}
          <td className='data'><img src={pencil}/></td>
        </tr>
      );
  });
  const header = db[props.data].header.map(
    (column) => <th className='type'>{column}</th>
  );
  return (
    <Box boder='10px' right='48px' top='4px' left='45px' id='box-data'> 
      <table > 
        <thead><tr>{header}</tr></thead>
        <tbody>{values}</tbody>
      </table>
    </Box> 
  );
}
function Project(props) {
  return (
    <div className="Lister"> 
      <h1>{db[props.type].name}</h1>
      <Search data={props.type}/>
      <Add data={props.type} controller={props.controller}/>
      <List data={props.type}/>
    </div>
  );
}

export default Project;
