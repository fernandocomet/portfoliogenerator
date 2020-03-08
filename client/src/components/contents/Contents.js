import React, { Component } from 'react';

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (<div>
        <p>Content - The quick brown fox jumps over the lazy dog.</p>
        </div>);
    
  }
}

export default Contents;