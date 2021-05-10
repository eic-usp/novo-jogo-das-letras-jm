import React from 'react'
import TemplateEscuro from './TemplateEscuro';

export default function Creditos({mobile}) { 
    const content =
    <div style={{ textAlign: "center", display:mobile?"block":"flex", fontSize: mobile ? "0.9em" : "1em", marginTop: mobile ? "2em" : "-2em" }}>        
        <div style={{margin:mobile ? "0":"5em 2em 0em 5em"}}>
            <div style={{ fontFamily: "Luckiest Guy" }}>COORDENAÇÃO E SUPERVISAO GERAL</div>
            <div>Leila Maria Beltramini</div>
            <div>Nelma R. S. Bossolan</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>EDUCADORA</div>
            <div>Gislaine Costa dos Santos</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>CONSULTORIA E ORIENTAÇÃO DE TI</div>
            <div>Claudinei Caetano de Souza (versão 1.0)</div>
            <div>Simone Ferreira Souza (versão 2.0)</div>
            <br></br>
        </div>
        <div style={{margin:mobile ? "0":"5em 5em 0em 2em"}}>
            <div style={{fontFamily:"Luckiest Guy"}}>DESENVOLVIMENTO DE SOFTWARE</div>
            <div>Diego Prosperi Turibio (versão 1.0)</div>
            <div>Luísa Anastácio (versão 1.0)</div>
            <div>Laura Genari (versão 2.0)</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>CONTEÚDO E ARTE</div>
            <div>Marília Faustino da Silva</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>MÚSICA</div>
            <div> Benjamin Tissot - Buddy</div>
        </div>
    </div>
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="CRÉDITOS" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            {content}
        </div>
    )    
    }