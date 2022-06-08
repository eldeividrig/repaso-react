import React, {useState} from 'react'

export const PrimerComponente = () => {
  // let nombre = "David Barboza";
  let web = "barbozacontenidos.com";
  let cursos = [
    "Master en JS",
    "Master en PHP",
    "Master en HTML",
    "Master en CSS"
  ];

  const [nombre, setNombre] = useState("David Barboza");

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  return (
    <div>
        <h1>PrimerComponente</h1>
        <p>Este es un texto de mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length > 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>
        <input type="text" onChange={e=> cambiarNombre(e.target.value)} placeholder = "Cambiar Nombre"></input>
        <button onClick={e=> {
          console.log("El valor guardado en tu estado es: ", nombre);
        }}>
          Mostrar Valor de Estado
        </button>
        <button onClick={ e=> cambiarNombre("David Gabriel Barboza")}>Cambiar Nombre</button>
        <h2>Cursos:</h2>
        <ul>
          {
            cursos.map( (curso, indice) => {
              return (<li key={indice}>
                {curso}
              </li>);
            })
          }
        </ul>

    </div>
  )
}
