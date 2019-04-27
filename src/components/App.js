import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogContainer from './HogContainer'

export default class App extends Component {

state = {
  hogs: hogs,
  gridlist: hogs,
  special: [],
  selected: null,
  unselected: [],
  searchTerm: ''
}

selectHog = selectedHog => {
  this.setState({ selected: selectedHog})
}

removeHog = unselectedHog => {
  this.setState(prevState => ({
    gridlist: [...prevState.gridlist.filter(hog => hog.name !== unselectedHog.name)],
    unselected: unselectedHog
} ) ) }

deselectHog = () => {
  this.setState({ selected: null})
}

specialHog = specialedHog => {
  this.setState(prevState => ({
    special: [...prevState.special, specialedHog]
  } ) )
  this.setState({ selected: null})
}

unspecialHog = unspecialedHog => {
  this.setState({
    special: this.state.special.filter(hog => hog !== unspecialedHog
) } ) }

updateSearchTerm = searchTerm => {
   this.setState({
     searchTerm: searchTerm
} ) }

toggleGrease = () => {
  this.setState({
    gridlist: this.state.hogs.filter(hog =>
      hog.greased === true
) } ) }

toggleUngrease = () => {
  this.setState({
    gridlist: this.state.hogs.filter(hog =>
      hog.greased === false
) } ) }

toggleAll = () => {
  this.setState({
    gridlist: this.state.hogs
} ) }

sortByNameDesc = () => {
  this.setState({
    gridlist: this.state.gridlist.sort((hogA, hogB) => {
      return (hogA.name < hogB.name)
      ? -1
      : 1
} ) } ) }

sortByNameAsc = () => {
  this.setState({
    gridlist: this.state.gridlist.sort((hogA, hogB) => {
      return (hogA.name > hogB.name)
      ? -1
      : 1
} ) } ) }

sortByWeightDesc = () => {
   const heavy = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
   const sorted = this.state.gridlist.sort((hogA, hogB) => {
     if (hogA[heavy] < hogB[heavy]) return 1
     return -1
   } )
   this.setState({ gridlist: sorted });
}

sortByWeightAsc = () => {
   const heavy = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
   const sorted = this.state.gridlist.sort((hogA, hogB) => {
     if (hogA[heavy] > hogB[heavy]) return 1
     return -1
   } )
   this.setState({ gridlist: sorted });
}

render() {
  const filteredHogs = this.state.gridlist.filter(
    hog => hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

    return (
      <div className="App">
          < Nav
          specialhogs={this.state.special}
          unspecialHog={this.unspecialHog}
          hogs={this.state.gridlist}
          updateSearchTerm={this.updateSearchTerm}
          toggleGrease={this.toggleGrease}
          toggleUngrease={this.toggleUngrease}
          toggleAll={this.toggleAll}
          sortByNameDesc={this.sortByNameDesc}
          sortByNameAsc={this.sortByNameAsc}
          sortByWeightDesc={this.sortByWeightDesc}
          sortByWeightAsc={this.sortByNameAsc}
          />

          { this.state.selected
          ?
            <div className="ui centered grid container">
              <div className="ui card" style={{margin: '3rem'}}>

                <div className="image">
                  <img src={require(`../hog-imgs/${this.state.selected.name.toLowerCase().split(' ').join('_')}.jpg`)}
                       alt = 'hog'
                  />
                </div>

                <div className="content" >
                  <h2>
                    {this.state.selected.name}
                  </h2>

                  <h3>
                    Weight : {this.state.selected['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} tonnes
                  </h3>
                  <h3>
                    Specialty : {this.state.selected.specialty}
                  </h3>
                  <h3>
                    Highest Medal Achieved : {this.state.selected['highest medal achieved'].toUpperCase()}
                  </h3>
                </div>

                <div className="extra content">
                  <div className="ui two buttons">

                    <div className="ui basic red button" onClick={this.deselectHog} >
                      Back
                    </div>

                    <div className="ui basic green button" onClick={() => this.specialHog(this.state.selected)}>
                      Specialise
                    </div>

                  </div>
                </div>

              </div>
            </div>

          :
          <div>
            < HogContainer
            hogs={filteredHogs}
            selectHog={this.selectHog}
            removeHog={this.removeHog}
            />
          </div>
        }
      </div>
    )
  }
}
