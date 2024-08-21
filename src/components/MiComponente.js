import React from 'react'

export const MiComponente = () => {

    let receta = {
        nombre: 'Pizza',
        ingredientes: ['Aceitunas', 'Tomate', 'Queso', 'Jamon'],
        calorias: 400
    }
    
  return (
    <>
        <h1>Receta: {receta.nombre}</h1>
        <h2>Calorias: {receta.calorias}</h2>
            <ol>
                {
                    receta.ingredientes.map( (ingrediente, i) => 
                        <li key={i}>
                            <p>{ingrediente}</p>
                        </li>
                    )
                }
            </ol>
        <hr/>
    </>
  )
}
