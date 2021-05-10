import React from 'react'
import { Link } from 'react-router-dom'
import TemplateEscuro from './TemplateEscuro';
import play from '../../public/play.png'

export default function Tema({ mobile}) { 
    var size, content;
    console.log("AAA")
    if (mobile) {
        size = {
            width: "50vw",
            height: "10vh",
            margin: "1vw",
        }
        content = <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
               <Link to={{
                    pathname:'game',
                    tema: 'Dengue'
                }}>
                    <button className="tema roxo" style={size}>
                        <img alt="play" src={play}/>   
                        <p style={{padding:"10px"}}>Dengue</p>
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Zika'
                }}>
                    <button className="tema azul" style={size}>
                        <img alt="play" src={play}/>
                        <p style={{padding:"10px"}}>Zica</p>
                    </button>
                </Link> 
                 <Link to={{
                    pathname:'game',
                    tema: 'Chikungunya'
                }}>
                    <button className="tema dark" style={size}>
                        <img alt="play" src={play}/>    
                        <p style={{padding:"10px"}}>Chikungunya</p>
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'FebreAmarela'
                }}>
                <button className="tema azul" style={size}>
                    <img alt="play" src={play}/>
                    <p style={{padding:"10px"}}>Febre Amarela</p>
                </button>
                </Link>          
                
                <Link to={{
                    pathname:'game',
                    tema: 'Aedes'
                    }}>
                    <button className="tema roxo" style={size}>
                        <img alt="play" src={play}/>    
                        <p style={{padding:"10px"}}>Aedes Aegypti</p>
                    </button>
                </Link> 
            </div>
    }
    else {
        size = {
            width: "15vw",
            height: "5vw",
            margin: "0.5vw 3vw 0.5vw 3vw",
        } 
        content = <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
               <Link to={{
                    pathname:'game',
                    tema: 'Dengue'
                }}>
                    <button className="tema roxo" style={size}>
                        <img alt="play" src={play}/>   
                        <p style={{padding:"10px"}}>Dengue</p>
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Zika'
                }}>
                    <button className="tema azul" style={size}>
                        <img alt="play" src={play}/>
                        <p style={{padding:"10px"}}>Zica</p>
                    </button>
                </Link> 
                 <Link to={{
                    pathname:'game',
                    tema: 'Chikungunya'
                }}>
                    <button className="tema azul" style={size}>
                        <img alt="play" src={play}/>    
                        <p style={{padding:"10px"}}>Chikungunya</p>
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'FebreAmarela'
                }}>
                <button className="tema roxo" style={size}>
                    <img alt="play" src={play}/>
                    <p style={{padding:"10px"}}>Febre Amarela</p>
                </button>
                </Link>          
                
                <Link to={{
                    pathname:'game',
                    tema: 'Aedes'
                    }}>
                    <button className="tema dark" style={size}>
                        <img alt="play" src={play}/>    
                        <p style={{padding:"10px"}}>Aedes Aegypti</p>
                    </button>
                </Link> 
            </div>
    }

    
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="ESCOLHA UM TEMA" font={"Luckiest Guy"} size={mobile ? "2em" : "2.4em"} bolinhas={false }/>
            
            {content}
        </div>
    )    
    }