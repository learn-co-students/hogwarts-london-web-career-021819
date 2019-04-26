import React, { Component } from 'react';

class FrontHog extends Component {

  render() {

    return (
      <div>
        <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)} alt="fuck the blind" />
        <h2>{this.props.hog.name}</h2>
      </div>
    );
  }

}

export default FrontHog;
