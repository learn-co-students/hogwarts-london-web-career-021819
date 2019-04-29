import React from 'react'
import HogTile from './HogTile'

class HogList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.hogs.map(hog => {
        return <HogTile hog={hog} />
        })}
      </ul>
    )
  }
}

export default HogList
