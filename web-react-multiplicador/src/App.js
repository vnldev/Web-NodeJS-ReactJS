import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroUm: 0,
      numeroDois: 0,
      resultado: 0,
    };

    this.resultadoFinal = this.resultadoFinal.bind(this);
  }

  resultadoFinal() {
    this.setState({
      numeroUm: document.getElementById("um").value,
      numeroDois: document.getElementById("dois").value,
      resultado: this.state.numeroUm * this.state.numeroDois,
    });
  }

  render() {
    return (
      <>
        <div>
          <legend>
            <h1>Multiplicador de Números</h1>
          </legend>
          <div>
            <label>
              <h4>Insira o 1º número:</h4>
              <input type="number" name="numeroUm" id="um" />
            </label>
          </div>
          <div>
            <label>
              <h4>Insira o 2º número:</h4>
              <input type="number" name="numeroDois" id="dois" />
            </label>
          </div>

          <button onClick={this.resultadoFinal}>Calcular</button>
          <h2>Resultado: {this.state.resultado}</h2>
        </div>
      </>
    );
  }
}

export default App;
