import React, { Component } from 'react'
import Hog from './Hog.js'

export default class Hoglist extends Component {

    render() {
        return (
            <div className="ui grid container">
                    {
                        this.props.hogs.map(hog => 
                            <Hog key={hog.id} hog={hog}/>
                            )
                    }
            </div>
        );
    }
}
