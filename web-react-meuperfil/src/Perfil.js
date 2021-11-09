import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'https://i.pinimg.com/originals/19/83/85/198385497c181810471a23a4d84c15a7.jpg';

      return (
        <img src={img} width={200} height={200} />
      );
    }
  }

  export default Perfil;