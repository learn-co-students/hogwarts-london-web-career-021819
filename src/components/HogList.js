import React from 'react'
import Hog from './Hog'

export default class HogList extends React.Component {

  render(){

    return(
      <div className="ui grid">
      {
        this.props.hogs.map(hog =>
          <Hog
            key={hog.name}
            hog={hog}
            selectHog={this.props.selectHog}
          />
        )
      }
      </div>
    )
  }
}
