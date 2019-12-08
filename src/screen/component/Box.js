import React from 'react'
import '../../css/Box.css'


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <div className='Box' id={this.props.id}  >
        <div className='Box-content' style={this.getStyle()}>
          {this.props.children}
        </div>
      </div>
    );
  }
  getStyle() {
    const aux = this.props;
    if (aux.horizontal || aux.vertical) {
      return {
        paddingTop: aux.horizontal? aux.horizontal : 'auto',
        paddingBottom: aux.horizontal? aux.horizontal : 'auto',
 
        paddingLeft: aux.vertical? aux.vertical : 'auto',
        paddingRight: aux.vertical? aux.vertical : 'auto',
      }
    }

    if (aux.bottom || aux.top || aux.right || aux.left) {
      return {
        paddingTop: aux.top? aux.top : 'auto',
        paddingBottom: aux.bottom? aux.bottom : 'auto',
 
        paddingLeft: aux.left? aux.left : 'auto',
        paddingRight: aux.right? aux.right : 'auto',
      }
    }

  }
}


export default Box;