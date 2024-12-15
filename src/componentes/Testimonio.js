import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='img-testimonio'
        src={require('../img/autos.jpg')}
        alt='foto cards'/>
        
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>adasdasdasdasddsadasdadsad</p>
        <p className='cargo-testimonio'>asdasdasdasdasdasdasdasdasd</p>
        <p className='texto-testimonio'>asdasdasdasdasdadasdasdasdsada</p>
      </div>  
    </div>
  );
}

export default Testimonio;
