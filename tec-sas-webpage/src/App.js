import { useState } from "react";
import "./App.css";
//import mailer from './components/mailer';

function App() {
  const [contadorValue, actualizarContador] = useState(52);

  const sumar = ()=>{
    actualizarContador(contadorValue + 1)
  }

  return (
    <div className="App">
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
  );
}

export default App;
