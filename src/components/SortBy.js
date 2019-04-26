import React, { Component } from 'react'

class SortBy extends Component {

  render() {

    return (
      <div className="ui dropdown">
        <div class="text">Sort By</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item">Name</div>
          <div class="item">Weight</div>
        </div>
      </div>
    )
  }
}

export default Search

// onClick={event => updateSearchTerm(event.target.value)}
//
