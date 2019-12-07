import React from 'react'

import addSymbol from '../../css/assets/add-symbol.png';

import '../../css/AddButton.css'


class AddButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (<button className='AddButton' onClick={this.props.onClick? this.props.onClick : undefined }><img alt="add" src={addSymbol}></img></button>);
    }
}

export default AddButton;