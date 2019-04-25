import React, { Component } from 'react'

class Hog extends Component {

  render() {
    const { hog } = this.props
    const weight = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const medal = hog['highest medal achieved']
    const { specialty } = hog

    return (
      <div className="ui card" style={{margin: '2rem'}}>
        <div className="ui slide masked reveal image">
          <img src={require(`../hog-imgs/${hog.name.toLowerCase().split(' ').join('_')}.jpg`)} className="visible content" alt ='' />
          <div className="hidden content" style={{padding: '2rem'}}>
            <div className="ui list">
              <div className="item">
                <div className="header">Weight</div>
                  {weight} tonnes
              </div>
              <div className="item">
                <div className="header">Speciality</div>
                {specialty}
              </div>
              <div className="item">
                <div className="header">Highest Medal Achieved</div>
                {medal.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
        </div>
      </div>
    )
  }

}

export default Hog
