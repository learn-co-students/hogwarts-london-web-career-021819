import React, { Component } from 'react';

class BackHog extends Component {

  render() {

    return (
      <div>
        <h4>Specialty: {this.props.hog.specialty}</h4>
        <h4>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
        <h4>Medal: {this.props.hog['highest medal achieved']}</h4>
      </div>
    );
  }

}

export default BackHog;
