import React, { Component } from 'react';

class Filter extends Component {

  render() {

    return (
      <div>
        <button onClick={this.props.sortName}>Sort by Name</button>
        <button onClick={this.props.sortWeight}>Sort by Weight</button>
        <button onClick={this.props.toggleGrease}>Toggle Greased</button>
        <br />
        <br />
      </div>
    );
  }

}

export default Filter;
