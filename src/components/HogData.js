import React from 'react'

export default class HogData extends React.Component {

  render(){
    return(
      <div>
        <div className="content">
          <h4 className="ui sub header">Hog Details</h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div class="summary">
                  <p>{this.props.hog.specialty}</p>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <p>Greased: {this.props.hog.greased ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <p>highest medal achieved: {this.props.hog['highest medal achieved']}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
}
