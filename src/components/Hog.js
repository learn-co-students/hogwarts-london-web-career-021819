import React from 'react'
import HogData from './HogData'
export default class Hog extends React.Component {

  state = {
    showDetails: false
  }

  toggleDetails = () => this.setState({showDetails: !this.state.showDetails})
  render(){
    return (
      <div onClick={() => this.toggleDetails()} className= "ui card">
        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'_')}.jpg`)} alt=''/>
        </div>
        <div className="content">
          <p className="header">{this.props.hog.name}</p>
        </div>
        {
          this.state.showDetails
          ? <HogData hog={this.props.hog}/>
          : null
        }
    </div>
  )}
}
