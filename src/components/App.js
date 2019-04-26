import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList.js';
import Filters from './Filters.js'

class App extends Component {

  state = {
    hogs: hogs,
    greased: false
  }

  toggleGrease = () => {
    this.setState({
      greased: !this.state.greased
    })

  }

  sortByName = () => {
    this.setState({
      hogs: this.state.hogs.sort((hogA, hogB) => {
        return (hogA.name > hogB.name)
          ? 1
          : -1
      })
    })
  }

  sortByWeight = () => {
    this.setState({
      hogs: this.state.hogs.sort((hogA, hogB) => {
        return (hogA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > hogB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          ? -1
          : 1
      })
    })
  }

  render() {
    return (<div className="App">
      <Nav/>
      <Filters hogs={this.state.hogs} toggleGrease={this.toggleGrease} sortName={this.sortByName} sortWeight={this.sortByWeight}/> {
        this.state.greased
          ? <HogList allHogs={this.state.hogs.filter(hog => hog.greased === true)}/>
          : <HogList allHogs={this.state.hogs}/>
      }
    </div>)
  }
}

export default App;
