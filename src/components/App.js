import React, { Component } from 'react';
import '../App.css';
import hogs from '../porkers_data';

import Nav from './Nav'
import HogsList from './HogsList'

class App extends Component {

  state = {
    hogs,
    searchTerm: '',
    filterByGreased: false,
    sortBy: ''
  }

  updateSearchTerm = searchTerm => {
    this.setState({
      searchTerm
    })
  }

  setSort = sortBy => {
    this.setState({
      sortBy
    })
  }

  turnOnFilter = () => {
    this.setState({
      filterByGreased: (this.state.filterByGreased ? false : true)
    });
  }

  render() {
    const { updateSearchTerm, setSort, turnOnFilter } = this
    const {searchTerm, sortBy, filterByGreased} = this.state

    const hogsFilteredBySearch = this.state.hogs.filter(h => h.name.toLowerCase().includes(searchTerm))

    const hogs = (filterByGreased
    ? hogsFilteredBySearch.filter(h => h.greased)
    : hogsFilteredBySearch
  )

    switch (sortBy) {
      case 'name':
        hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
        break
      case 'weight':
        hogs.sort((a,b) =>
        (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
        ? 1 : -1).reverse()
        break
      default:
    }


    return (
      <div className="App">
        <Nav updateSearchTerm={updateSearchTerm} setSort={setSort} turnOnFilter={turnOnFilter} />
        <HogsList hogs={hogs} />
      </div>
    )
  }
}

export default App;
