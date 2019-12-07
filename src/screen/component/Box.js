import React from 'react'
import '../../css/Box.css'


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className='Box' id={this.props.id} style={{ 
          borderRadius: this.props.boder
        }} >
        <div style={{
          paddingTop: this.props.top? this.props.top : 'auto',
          paddingRight: this.props.right? this.props.right : 'auto', 
          paddingBottom: this.props.bottom? this.props.bottom : 'auto',
          paddingLeft: this.props.left? this.props.left : 'auto',
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }

}


export default Box;