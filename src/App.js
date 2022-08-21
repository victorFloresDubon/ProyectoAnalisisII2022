import React from "react";
import Body from "./components/InicioBanner/body";
import Grupos from "./components/inicio/grupos";
import Inicio from "./components/InicioBanner/inicio";
import Partidos from "./components/inicio/partidos";
import Estadios from "./components/inicio/estadios";

function App() {
  return (
    <div>
      <Inicio/>
      <Body/> 
      <Grupos/>
      <Estadios/>
      <Partidos/>      
    </div>
  );
}

export default App;
