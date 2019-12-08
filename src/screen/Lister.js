import React from 'react';
import Popup from 'reactjs-popup';
import Box from './component/Box';
import AddButton from './component/AddButton';
import Add from './Add';

import pencil from '../css/assets/edit-symbol.png';
import bloom from '../css/assets/search-symbol.png'

import '../css/Lister.css';

import * as db from '../db/Table';



class Search extends React.Component {
  render() {
    return (
      <div className='search-projects'>
        <h2 className='topic'>Pesquisar {db[this.props.data].name}</h2>
        <Box left='15px' top='10px' bottom='10px' right='5px' id='search-box'>
          <input className='searcher' type='text'/>
          <img style={{display: 'inline'}} alt='search' src={bloom}></img>
        </Box>
      </div>
    );
  }
}

export class AddCommand extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  renderDialog() {
    return (<h2 className='topic' id="search">Adicionar {db[this.props.data].name}</h2>);
  }

  render () {
    return (
      <>
        {this.renderDialog()}
        <AddButton onClick={ev => this.props.controller(<Add type={this.props.data}/>)}/>
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
            att => <td className='data' key={att.toString()}> {value[att]} </td>
          )}
          <td className='data'><img src={pencil} alt='pencil'/></td>
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
      <AddCommand data={props.type} controller={props.controller}/>
      <List data={props.type}/>
    </div>
  );
}

export default Project;
