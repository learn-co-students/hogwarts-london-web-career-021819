import React, { Component } from 'react'

class Filter extends Component {

  render() {
    const { turnOnFilter } = this.props
    
    return (
      <div className="ui toggle checkbox">
      <input type="checkbox" name="public" onClick={turnOnFilter}/>
      <label>Filter for greased</label>
      </div>
    )
  }

}

export default Filter
