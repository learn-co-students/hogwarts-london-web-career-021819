import React, { Component } from 'react'

export default class HogCard extends Component {

render(){
  return (
      <div className="ui card" style={{margin: '1rem'}} >

        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.name.split(' ').join('_').toLowerCase()}.jpg`)}
               alt = 'hog'
          />
        </div>

        <div className="content" >
          <h2>
            {this.props.hog.name}
          </h2>
        </div>

        <div className="ui two buttons" >
          <button className="ui basic grey button" onClick={() => this.props.removeHog(this.props.hog)} > Remove </button>
          <button className="ui basic black button" onClick={() => this.props.selectHog(this.props.hog)}> Select </button>
        </div>

      </div>
) }


}
