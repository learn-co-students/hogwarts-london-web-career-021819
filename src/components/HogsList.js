import React, { Component } from 'react'

import Hog from './Hog';

class HogsList extends Component {

  render() {
    const { hogs } = this.props
    return (
      <div className='ui grid container'>
        {hogs.map(h => <Hog hog={h} key={h.name}/>)}
      </div>
    );
  }

}

export default HogsList
