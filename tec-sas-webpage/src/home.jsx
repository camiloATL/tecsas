import React, { useState } from 'react'

export default function Home() {
  const [contadorValue, actualizarContador] = useState(52);

  const sumar = ()=>{
    actualizarContador(contadorValue + 1)
  }
  return (
    <div className="Home">


      <section className="App-content"></section>
      <h1> Contador</h1>
      <div>
        <span>{contadorValue}</span>
        <button
          onClick={sumar}
        >
          Increment +
        </button>
        <button onClick={() => {actualizarContador(contadorValue-1)}}>Decrement -</button> 
      </div>
    </div>
  )
}
