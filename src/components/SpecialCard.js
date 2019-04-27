import React, { Component } from 'react'

export default class SpecialCard extends Component {

render(){
  return (
      <div className="ui card" style={{margin: '3rem'}}>

        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}
               alt = 'hog'
          />
        </div>

        <div className="content" >
          <h2>
            {this.props.hog.name}
          </h2>
        </div>

        <div className="ui medium button" onClick={() => this.props.unspecialHog(this.props.hog)} >
          Unspecialise
        </div>

      </div>
) }


}
