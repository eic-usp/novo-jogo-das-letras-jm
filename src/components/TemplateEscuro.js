import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import seta from '../../public/seta.png'

export default class TemplateEscuro extends Component{
    

    render() {
        var um= "#FFF", dois= "#FFF", tres= "#FFF", quatro= "#FFF", cinco= "#FFF", bolinhas;
        if (this.props.level === 1) {
            um = "#FCCF44";
            bolinhas = <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
        }
        else if (this.props.level === 2) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
                dois = "#Fff"; 
            }
            else {
                um = "#6DD0BC"
                dois = "#FCCF44";                
            }
             bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{ borderRadius: "50px", width: "10px", height: "10px", margin: "4px", backgroundColor: dois }}></div>
            </div>
        }
        else if (this.props.level === 3) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
                dois = "#fff"
                tres = "#fff";                
            }
            else if (this.props.fase === 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
                tres = "#fff";                
            }
            else if (this.props.fase === 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";                
            }
            bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
            </div> 
        }
        else if (this.props.level === 4) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
                dois = "#fff"
                tres = "#fff"; 
                quatro = "#fff";
            }
            else if (this.props.fase === 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
                tres = "#fff";     
                quatro = "#fff";
            }
            else if (this.props.fase === 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";              
                quatro = "#fff";
            }
            else if(this.props.fase === 4){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro = "#FCCF44";
            }
            bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:quatro}}></div>
            </div> 
        }
        else if (this.props.level === 5) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
                dois = "#fff"
                tres = "#fff"; 
                quatro = "#fff";
                cinco = "#FFF";
            }
            else if (this.props.fase === 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
                tres = "#fff";     
                quatro = "#fff";
                cinco = "#FFF";
            }
            else if (this.props.fase === 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";              
                quatro = "#fff";
                cinco = "#FFF";
            }
            else if(this.props.fase === 4){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro = "#FCCF44";
                cinco = "#FFF";
            }
            else if(this.props.fase === 5){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro ="#6DD0BC"
                cinco = "#FCCF44";
            }
            bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:quatro}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:cinco}}></div>
            </div> 
        } 
        
        var subtitle = false
        if (this.props.id === "JOGO DAS LETRAS")
            subtitle = true

        if (this.props.mobile) {
            if (this.props.bolinhas) {
                return (
                    <div className="enunciado mobile">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"90%" }}>{this.props.id}</p>
                        <div>
                            {bolinhas}
                        </div>
                    </div>                    
                )
            }
            else if (subtitle) {
                if (window.innerWidth < 500){
                    return (
                        <div  style={{display:" flex", alignItems: "center"}} className="enunciado mobile inicial">
                                <div style={{ top: "20%", position: "relative"}}>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width: "60%", lineHeight: "1", position: 'relative', bottom: "0.5em" }}>{this.props.id}</p>
                                    </div>
                                    <p style={{ position: 'relative', bottom: "4em" , fontStyle:"italic"}}>Aedes aegypti</p>
                                </div>                    
                        </div>
                    )
                }
                else{
                    return (
                        <div  style={{display:" flex", alignItems: "center"}} className="enunciado mobile inicial">
                            <div style={{ top: "20%", position: "relative"}}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                                    <p style={{ fontFamily: this.props.font, fontSize: this.props.size, lineHeight: "1", position: 'relative', bottom: "0.5em"}}>{this.props.id}</p>
                                </div>
                                <p style={{ position: 'relative',  bottom: "4em"  , fontStyle:"italic"}}>Aedes aegypti</p>
                            </div>
                        
                        </div>
                    )
                }
            }
            else{    
                return (
                    <div className="enunciado mobile">
                        <Link to={{
                            pathname:'inicial',
                        }}>
                            <div style={{position:"relative", right:"5vw", width:"30px"}}>
                                <img src={seta} alt="seta"/>
                            </div>
                        </Link>
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, lineHeight: "1" }}>{this.props.id}</p>
                    </div>
                )
            }
        }
        else {
            if (this.props.bolinhas) {
                return (
                    <div className="enunciado desktop">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"90%"  }}>{this.props.id}</p>        
                        <div>
                            {bolinhas}
                        </div>
                    </div>
                )
            }
            else if (subtitle){
                return (
                    <div className="enunciado desktop inicial">
                        <p style={{ fontFamily: this.props.font, fontSize: '5em'}}>{this.props.id}</p>
                        <p style={{fontSize: '2em', bottom:"1em", position:"relative", fontStyle:"italic"}}>Aedes aegypti</p>
                    
                    </div>
                )
            }
            else {
                return (
                    <div className="enunciado desktop">
                        <Link to={{
                                    pathname:'inicial',
                        }}>
                            <div style={{position:"relative", right:"15vw"}}>
                                <img src={seta} alt="seta" style={{ width: "30px" }}/>
                            </div>
                        </Link>
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size }}>{this.props.id}</p>
                    </div>
                )
            }
        }
    }
}