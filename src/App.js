import React, {useState, useEffect} from "react";
import Body from "./components/InicioBanner/body";
import InicioBanner from "./components/InicioBanner";
import Grupos from "./components/inicio/grupos";

function App() {
  return (
    <div>
      <InicioBanner/>
      <Body/>  
      <div>
        <Grupos/>
      </div>
    </div>
  );
}

export default App;
