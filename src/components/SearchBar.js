import React, { Component } from 'react'

export default class SearchBar extends Component {

 render() {
   return (
    <div className="ui icon input" style={{margin: '1rem'}}>
      <i className="search icon"></i>
      <input type="text" placeholder="Search..." onChange={event => this.props.updateSearchTerm(event.target.value)}/>
    </div>
)}

}
