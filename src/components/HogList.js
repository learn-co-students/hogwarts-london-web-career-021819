import React, { Component } from 'react';
import Hog from './Hog.js';

class HogList extends Component {

  listHogs = () => {
    return this.props.allHogs.map(hog => <Hog hog={hog}/>)
  }

  render() {
    return (
      <div className="ui grid container">
        {this.listHogs()}
      </div>
    );
  }

}

export default HogList;
