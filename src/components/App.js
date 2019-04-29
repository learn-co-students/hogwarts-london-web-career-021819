import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import HogTile from './HogTile'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    viewOnlyGreased: false
  }

  sortByName = () => {
    const sortedByName = this.state.hogs.sort((hogA, hogB) => {
      if (hogA.name < hogB.name) return -1
      return 1
    })
    this.setState({ hogs: sortedByName})
  }

  sortByWeight = () => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const sortedByWeight = this.state.hogs.sort((hogA, hogB) => {
    if (hogA[weight] < hogB[weight]) return 1
    return -1
    })
    this.setState({ hogs: sortedByWeight})
  }

  toggleGreased = () => {
  this.setState({ viewOnlyGreased: !this.state.viewOnlyGreased });
};

filteredHogs = () => {
  return this.state.viewOnlyGreased
    ? this.state.hogs.filter(hog => hog.greased === true)
    : this.state.hogs;
};

  render() {
    return (
      <div className="App">
          <Nav />
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByWeight}>Sort by Weight</button>
          <button onClick={this.toggleGreased}>Toggle Greased</button>
        <HogList hogs={this.filteredHogs()} />
       </div>
    )
  }

}

export default App;
