import React, { Component } from 'react';
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'
import sairB from '../../public/sair.png'
import sairP from '../../public/sair-preto.png'

class Sair extends Component {
    render() {
        var game = this.props.location.pathname === "/game" ? true : false
        
        if (this.props.mobile && game){
            return <a onClick={() => Swal.fire({
                    title: "SAIR DO JOGO",
                    text: "Tem certeza que deseja sair do jogo?",
                    imageUrl: "/exclamacao.png",
                    showCloseButton: true,
                    showCancelButton: true,
                    showConfirmButton: true,
                    padding: '3em',
                    confirmButtonText: "<a href='http://eic.ifsc.usp.br/app/jogo-das-letras-aedes/'>SIM</a>",
                    cancelButtonText: 'NÃO',
                    confirmButtonColor: '#fff',
                    cancelButtonColor: '#fff',
                    
                })}>
                    <img alt="sair" src={sairP} style={{ padding: "0.5em" }}/>   
            </a>
        }
        else {
            return <a onClick={() => Swal.fire({
                    title: "SAIR DO JOGO",
                    text: "Tem certeza que deseja sair do jogo?",
                    imageUrl: "/exclamacao.png",
                    showCloseButton: true,
                    showCancelButton: true,
                    showConfirmButton: true,
                    padding: '3em',
                    confirmButtonText: "<a href='http://eic.ifsc.usp.br/app/jogo-das-letras-aedes/'>SIM</a>",
                    cancelButtonText: 'NÃO',
                    confirmButtonColor: '#fff',
                    cancelButtonColor: '#fff',
                    
                })}>
                    <img alt="sair" src={sairB} style={{ padding: "0.5em" }}/>   
            </a>
        }
        

    }

}
export default withRouter(Sair)