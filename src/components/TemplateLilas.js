import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import home from '../../public/home.png'
import Music from './Music'
import Sair from './Sair'

class TemplateLilas extends Component {

    render() {
        console.log(this.props.location.pathname)
        var inicial = this.props.location.pathname === "/inicial" ? true : false
        var game = this.props.location.pathname === "/game" ? true : false
        if (this.props.mobile) {
                return (
                    <div className={game?"bloco-lilas-transparente":"bloco-lilas mobile"} style={{marginTop:game?window.innerWidth<500?"120%":"90%":"0"}}>
                        
                        <Music mobile={this.props.mobile} game={game}/>
                        {!inicial && 
                            !game &&
                            <Link to={{
                                    pathname:'inicial',
                                }}>                               
                                    <img alt="home" src={home} style={{ padding: "0.5em" }}/>
                            </Link>
                        }
                        {!inicial &&
                            game
                                && <Sair mobile={this.props.mobile} game={game}/>
                        }
                    </div>
                )
        }
        else {
            return (
                <div className="bloco-lilas desktop">
                    <Music mobile={this.props.mobile} game={game}/>
                    {!inicial &&
                    game
                        && <Sair mobile={this.props.mobile} game={game}/>
                    }

                    
                    {!inicial && !game && 
                        <Link to={{
                                    pathname:'inicial',
                                }}>
                                    <img alt="home" src={home} style={{ padding: "0.5em" }}/>
                        </Link>
                    }
                </div>
            )
        }

    }
}
export default withRouter(TemplateLilas)