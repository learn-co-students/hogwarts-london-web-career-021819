import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogList from './Hoglist';
import Search from './Search';

class App extends Component {

  constructor () {
    super()
    this.state = {
       hogs: hogs,
       searchTerm: '',
       greased: null
    }
  }

  updateSearchTerm = (searchTerm) => {
     this.setState({searchTerm})
  }



  // updateGreased = () => {
  //   this.setState({greased:!this.state.greased})
  // }

  render() {
    const search = this.state.searchTerm
    const filteredHogs = this.state.hogs.filter(hog => {hog.name === search})

    console.log(filteredHogs)

    return (
      <div className="App">
          <Nav />
          <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
          <HogList hogs={filteredHogs}/>
      </div>
    )
  }
}

export default App;
