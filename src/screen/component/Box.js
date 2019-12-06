import React from 'react'



class Box extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this)
    this.props = props;
  }

  renderContent() {
    return '';
  }

  render() {
    return (
      <div className='Box'>
        <div style={{
        }}>
          {this.renderContent()}
        </div>
      </div>
    );
  }

}


export default Box;