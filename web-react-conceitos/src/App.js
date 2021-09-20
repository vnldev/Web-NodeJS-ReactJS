import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Victor'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    // this.state.nome = 'Victor Lima'
    this.setState({
      nome: 'Victor Lima'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
        </center>
      </div>
    );
  }
}
 
export default App;
