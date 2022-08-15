import Boton from "./components/Boton";

function App() {
  return (
    //asi mandamos un valor al componente, enviandole una variables
    <div className="App">
      <p>Inicio</p>
      <Boton numero = "1"/> 
      <Boton numero = "2"/>
    </div>
  );
}

export default App;
