import React, {useState} from 'react';
import PropTypes from "prop-types";

export const EjercicioComponent = ({year}) => {

  const [yearNow, setYearNow] = useState(year);

  const siguiente = e => {
    setYearNow(yearNow+1);
  }
  const anterior = e => {
    setYearNow(yearNow-1);
  }

  const cambiarYear = e=> {
    let dato = parseInt(e.target.value);
    if (Number.isInteger(dato)) {
      setYearNow(dato);  
    }else{
      setYearNow(year);
    }
    
  }

  return (
    <div>
        <h2>Ejercicio con Eventos y useState</h2>
        <strong className='label label-green'>
          {yearNow}
        </strong>
        <p>
          <button onClick={siguiente}>Siguiente</button>
          &nbsp;
          <button onClick={anterior}>Anterior</button>
        </p>
        <p>Cambiar año:

          <input type="text" onChange={cambiarYear} placeholder = "Cambiar Año"></input>
        </p>
        
        
    </div>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired
}
