import "./App.css";
import Navbar from "./shared/navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="tittleregister">
        <h3 className="tittletext">Registro de usuarios</h3>
      </div>
      <div className="line"></div>
      <div className="contenedor">
        <div className="titanlogo"></div>
        <div className="stylelogin"></div>
        <div className="codeblocklogo"></div>
      </div>
      <div className="ancho-arriba"></div>
    </div>
  );
}

export default App;
