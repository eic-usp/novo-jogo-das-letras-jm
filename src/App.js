import React, {Component} from 'react';
import './App.css';
import Template from './components/Template';
import Music from './components/Music'

export default class App extends Component {

  render() {
    return (
      <div>
        <Template/>
        <Music/>
      </div>
    );
  }
}
