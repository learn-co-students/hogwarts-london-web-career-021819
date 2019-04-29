import React from 'react'


class HogTile extends React.Component {

  state = {
    detailedView: false
  }

  changeDetailView = () => {
    this.setState({detailedView: true})
  }

  render() {
    const hogNameParsed = this.props.hog.name.replace(/\s/g, "_").toLowerCase()
    return (
      <div>
      <h3>{this.props.hog.name}</h3>
      <img onClick={this.changeDetailView} src={require(`../hog-imgs/${hogNameParsed}.jpg`)} alt="{this.props.hog.name}"/>
      {this.state.detailedView && (
        <p>Specialty: {this.props.hog.specialty} </p>
      )}
      </div>
    )
  }
}

export default HogTile
