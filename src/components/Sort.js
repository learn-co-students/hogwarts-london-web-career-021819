import React, { Component } from 'react'

class Sort extends Component {

  setSort = e => {
    this.props.setSort(e.target.value)
  }

  render() {
    const { setSort } = this

    return (
      <div>
        Sort by:
        <div className="ui mini buttons" style={{margin: '1rem'}}>
          <button className="ui button" value='name' onClick={setSort} >Name</button>
          <div className="or"></div>
          <button className="ui button" value='weight' onClick={setSort}>Weight</button>
        </div>

      </div>
    )
  }

}

export default Sort
