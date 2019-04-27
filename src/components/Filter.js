import React, { Component } from 'react';

export default class Filter extends Component {

render() {
  return (
    <div className='ui centered grid container' style={{margin: '1rem'}} >

      <div className="ui buttons" style={{margin: '0.5rem'}}>
        <button className="ui blue button" onClick={this.props.sortByNameDesc}> Sort By Name  ↓ </button>
        <button className="ui teal button" onClick={this.props.sortByNameAsc}> Sort By Name  ↑ < /button>
      </div>

      <div className="ui buttons" style={{margin: '0.5rem'}}>
        <button className="ui grey button" onClick={this.props.toggleUngrease}> Ungreased </button>
        <button className="ui black button" onClick={this.props.toggleAll}> All </button>
        <button className="ui brown button" onClick={this.props.toggleGrease}> Greased < /button>
      </div>

      <div className="ui buttons" style={{margin: '0.5rem'}}>
        <button className="ui red button" onClick={this.props.sortByWeightDesc}> Sort By Weight  ↓ </button>
        <button className="ui yellow button" onClick={this.props.sortByWeightAsc}> Sort By Weight  ↑ < /button>
      </div>

    </div>
) }

}
