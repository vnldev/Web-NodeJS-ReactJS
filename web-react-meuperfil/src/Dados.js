import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Victor Nascimento de Lima',
      email: 'victor-lima26@hotmail.com',
      cidade: 'Santos - SP',
      formacao: 'Cursando Ciência da Computação na UNIP',
      exp: 'Conhecimentos em: Java, Python, NodeJS, ReactJS, HTML, CSS, JavaScript e Banco de Dados',
      projetos: 'Projetos se encontram no GitHub "vnl13"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.email}</h2>
          <h2>{this.state.cidade}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projetos}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;