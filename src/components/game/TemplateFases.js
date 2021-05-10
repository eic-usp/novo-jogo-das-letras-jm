import React, { Component } from 'react'
import Stopwatch from './Cornometro'; 
export default class Fases extends Component{
    shouldComponentUpdate(nextProps) {
        return this.props === nextProps;
    }
    render() {
        var um, dois, tres, quatro, cinco

        if (this.props.level === 1) {
            um = "#FCCF44";
            dois = "#fff"
            tres = "#fff"
            quatro = "#fff"
            cinco = "#fff"
        }
        else if (this.props.level === 2) {
            um = "#6DD0BC"
            dois = "#FCCF44";
            tres = "#fff"
            quatro = "#fff"
            cinco = "#fff"
        }
        else if (this.props.level === 3) {
            um = "#6DD0BC"
            dois = "#6DD0BC"
            tres = "#FCCF44";
            quatro = "#fff"
            cinco = "#fff"
        }
        else if (this.props.level === 4) {
            um = "#6DD0BC"
            dois = "#6DD0BC"
            tres = "#6DD0BC"
            quatro = "#FCCF44";
            cinco = "#fff"
        }
        else if (this.props.level === 5) {
            um = "#6DD0BC"
            dois = "#6DD0BC"
            tres = "#6DD0BC"
            quatro ="#6DD0BC"
            cinco = "#FCCF44";
        }
        var fase;
        if (this.props.mobile) 
            fase = "F"
        else {
            fase = "Fase "
        }
        return (
            <div className="fases" level={this.props.level} style={{width: this.props.mobile ? "7em" : "max-content", overflowX: 'hidden'}}>
                <div style={{backgroundColor: um}} className="texto">{fase}1</div>
                <div style={{backgroundColor: dois}} className="texto">{fase}2</div>
                <div style={{backgroundColor: tres}} className="texto">{fase}3</div>
                <div style={{backgroundColor: quatro}} className="texto">{fase}4</div>
                <div style={{backgroundColor: cinco}} className="texto">{fase}5</div>
            <div style={{ backgroundColor: "#fff", width: "80px", height: "40px", borderRadius: "4px", margin: "4px", display: "flex", justifyContent: "center", alignItems: "center" }}><Stopwatch/></div>            </div>
        )
    }

}