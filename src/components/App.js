import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'

import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    filteredHogs: hogs,
    selectedHog: null,
    isChecked: false
  }

  sortHogs = (sortByWhat) => {

    if (sortByWhat === "name") {
      this.setState({filteredhogs: hogs.sort((a,b) => (a.name > b.name) ? 1: -1)})
    } else if (sortByWhat === "weight") {
      this.setState({filteredhogs: (hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1: 1))})
    }
  }

  filterHogsByGreased = (e) => {
    debugger
    if (e.target.checked){
      this.setState({isChecked: true})
      this.setState({filteredHogs: hogs.filter((hog) => hog.greased === true)})
    } else {
      this.setState({isChecked: false})
      this.setState({filteredHogs: this.state.hogs})
    }
  }


  render() {
    const {sortHogsByName, sortHogsByWeight} = this
    const {hogs, filteringGreased} = this.state
    const style = { margin: '10px' }
    return (
      <div className="App">
          <Nav />

          <select style={style} onChange={e => this.sortHogs(e.target.value)} >
    				<option selected disabled>Sort By</option>
    	  		<option value="weight">Weight</option>
    	  		<option value="name">Name</option>
    			</select>

          <div style={style} className="ui toggle checkbox">
            <input
              type="checkbox"
              name="public"
               onChange={e => this.filterHogsByGreased(e)}></input>
            <label>Filter by Greased</label>
          </div>

          <HogList style={style} hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
