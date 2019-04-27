import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./Hoglist";
import Search from "./Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      searchTerm: "",
      veiwOnlyGreased: false
    };
  }

  updateSearchTerm = (searchTerm) => {
     this.setState({searchTerm})
  }

  sortByName = () => {
    const sortedbyName = this.state.hogs.sort((hogA, hogB) => {
      if (hogA.name < hogB.name) return -1;
      return 1;
    });
    this.setState(
      {hogs: sortedbyName}
    )
  };

  sortByWeight = () => {  
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    const sortedbyWeight = this.state.hogs.sort((hogA, hogB) => {
    if (hogA[weight] < hogB[weight]) return 1;
    return -1;
  });
  this.setState(
    {hogs: sortedbyWeight}
  )};

  toggleGreased = () =>{
    this.setState({veiwOnlyGreased :!this.state.veiwOnlyGreased}) 

  }


  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.sortByName}>sort by name</button>
        <button onClick={this.sortByWeight}>sort by weight</button>
        <button onClick={this.toggleGreased}>toggle greased</button>
        <Search
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
        />
        <HogList hogs={this.state.veiwOnlyGreased ? this.state.hogs.filter((hog)=> hog.greased === true ): this.state.hogs} />
      </div>
    );
  }
}

export default App;
