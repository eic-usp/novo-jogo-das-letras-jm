import React, { Component } from 'react';
import Routes from './Routes'

export default class Template extends Component{
  
    render() {
        const mobile = window.innerWidth < 801;
        if (mobile) {
            return (
                <div className="scope mobile" >
                    <Routes mobile={mobile}/>
                </div>

            )
        }
        else {
            return (
                <div className="scope desktop">
                    <Routes mobile={mobile} />
                </div>
            )
        }

    }

}