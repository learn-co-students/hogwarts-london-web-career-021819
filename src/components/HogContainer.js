import React, { Component } from 'react'
import HogCard from './HogCard'

export default class HogContainer extends Component {

render() {
  return (
    <div className="ui centered grid container">
      {this.props.hogs.map(hog =>
      <HogCard hog={hog}
               key={hog.name}
               selectHog={this.props.selectHog}
               removeHog={this.props.removeHog}
      />
      ) }
    </div>
) }

}
