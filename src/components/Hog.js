import React, { Component } from 'react';
import hogs from '../porkers_data';



export default class Hog extends Component {

    render() {
        const pigPic = require("../hog_imgs/" + this.props.hog.name.toLowerCase().split(" ").join("_") + ".jpg")

        return (

            <div className="ui move reveal" id={this.props.hog.id}>
                
                <div className="visible content">
                   <img src={pigPic} alt="silly hog"/>
    
                </div>

                <div className="hidden content">
                <h4>{this.props.hog.name}</h4>
                    <h4>Greased? <input type="checkbox" checked={this.props.hog.greased} /></h4>
                    <h4>Specialty: {this.props.hog.specialty}</h4>

                </div>

            </div>


        );
    }
}
