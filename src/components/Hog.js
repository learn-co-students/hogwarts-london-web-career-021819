import React, { Component } from 'react';
import FrontHog from './FrontHog.js';
import BackHog from './BackHog.js';

class Hog extends Component {

  state = {
    clicked: true
  }

  clickPig = () => {
  this.setState({clicked: !this.state.clicked})
  }

  render() {

    return (
      <div className="ui card eight wide column" onClick={this.clickPig}>
        {this.state.clicked
        ? <FrontHog hog={this.props.hog} />
        : <BackHog hog={this.props.hog} />}
      </div>
    );
  }

}

export default Hog;
