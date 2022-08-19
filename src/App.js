import React, {useState, useEffect} from "react";
import Body from "./components/InicioBanner/body";
import InicioBanner from "./components/InicioBanner";
import Grupos from "./components/Grupos";
import { getGrupos } from "./firebase/firebase";

function App() {
  getGrupos();
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
