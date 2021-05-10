import React from 'react'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';
import trofeus from '../../public/trofeus.png'
import estrelas from '../../public/estrelas.png'
import jogar from '../../public/jogar.png'
import compartilhar from '../../public/compartilhar.png'
import { Link } from 'react-router-dom'

export function Pontuador(inicial, final) {
    return <div  style={{background: "rgba(255, 210, 134, 0.6)",borderRadius: "8px", padding:"1em", width:"fit-content"}}>
       { Math.round(10000 / (final - inicial)) * 5} {" pontos"}

    </div>
}
export function Tempo(inicial, final) {
    var segundos = Math.round((final - inicial) / 1000)
    var minutos = 0
    var horas = 0
    if (segundos >= 60){
        minutos = Math.ceil(segundos / 60)
        segundos %= 60
    }
    if (minutos >= 60) {
        horas =  Math.ceil(minutos / 60)
        minutos %= 60
        segundos %= 60
    }
    if(horas < 10){
        horas = "0"+horas
    }
    if(minutos < 10){
        minutos = "0"+minutos
    }
    if(segundos<10){
        segundos = "0"+segundos
    }
    return <div style={{background: "rgba(255, 210, 134, 0.6)",borderRadius: "8px", padding:"1em", width:"fit-content"}}>
      {horas}:{minutos}:{segundos}
  </div>
}
export default function Final({ mobile,location}) { 
    const final = Date.now()

    const sizeMob = {
        borderStyle: 'none',
        width:"5.5em",
        height:"5.75em",
        margin:"1em",
        borderRadius:"8px",
        boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
    const sizeDesk = {
        width:"20em",
        height: "5em",
        color: 'white',
        borderRadius: '8px',
        borderStyle: 'none',
        textTransform: 'uppercase',
        fontWeight: '500',
        margin: '0.75em',
        boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around" 
    }
    const encodeURL = 'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(window.location.href)
    const botoesMob = 
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop:"2em" }}>
            <a href={encodeURL} target="_blank">
                <button className="lilas" style={sizeMob}>
                    <img alt="play" src={compartilhar}  height="24px"/>
                    </button>
            </a>
            <Link to={{
                    pathname:'inicial',
                }}>
                <button className="dark" style={sizeMob}>
                    <img alt="play" src={jogar}  height="24px"/>
                </button>
            </Link>
            
        </div>
    const botoesDesk =
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", paddingTop:"1em" }}>
            <a href={encodeURL} target="_blank">
                <button className="lilas" style={sizeDesk}>
                        <img alt="play" src={compartilhar} height="24px" />
                        COMPARTILHAR
                    </button>
            </a>
            <Link to={{
                    pathname:'inicial',
                }}>
                <button className="dark" style={sizeDesk}>
                    <img alt="play" src={jogar} height="24px" />
                    JOGAR NOVAMENTE
                </button>
            </Link>
        
    </div>
    
    const content =        
    <div style={{display:"block"}}>
        <div style={{ display: mobile ? "block" : "flex",justifyContent:"space-around", paddingTop:"4em", fontSize:window.innerWidth <400?"0.5em":"1em" }}>
            <div style={{padding: mobile ? "3em 5em 0em 5em" : "0em 5em 0em 5em", textAlign:"center"}}>
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img alt="trofeu" src={trofeus} style={{height:"7vh"}}/>
                </span>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Sua pontuação total foi</p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    { Pontuador(location.init, final)} 
                </div>
            </div>
            <div style={{padding: mobile ? "3em 5em 0em 5em" : "0em 5em 0em 5em", textAlign:"center"}}>
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img alt="estrelas" src={estrelas} style={{height:"7vh"}}/>
                </span>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Você concluiu o jogo (fases 1 a 5) em </p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    { Tempo(location.init, final)}
                </div>
            </div>                   
        </div>
            {mobile && botoesMob}
            {!mobile && botoesDesk}
    </div>
    
    const confeti = {
        backgroundSize: mobile ? "100%" : "50% 100%",
    }
    console.log((Date.now() - location.init))
    return (
        <div style={confeti} id="confeti">
            <TemplateEscuro mobile={mobile} id="FINAL" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            <TemplateLilas mobile={mobile}/>
            {content}
        </div>
    )    
}