import React, { Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Tema from './Tema'
import Game from './game/Game'
import Inicial from './Inicial'
import Instrucoes from './Instrucoes';
import Creditos from './Creditos';
import Final from './Final';

import TemplateLilas from './TemplateLilas';

export default class Routes extends Component {
    render() {
        const mobile = this.props.mobile
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/tema" render={(props) => <Tema {...props} mobile={mobile}/>} />
                    <Route exact path="/instrucoes" render={(props) => <Instrucoes {...props} mobile={mobile} />} />
                    <Route exact path="/creditos" render={(props) => <Creditos {...props} mobile={mobile}/>}  />
                    <Route exact path="/game" render={(props) => <Game {...props} mobile={mobile} />} />
                    <Route exact path="/inicial" render={(props) => <Inicial {...props} mobile={mobile} />} />
                    <Route exact path="/final" render={(props) => <Final {...props} mobile={mobile} />}  />
                    <Redirect to="/inicial"/>
                </Switch>                           
                <TemplateLilas mobile={this.props.mobile} />
            </BrowserRouter> 
        )
    }
 }