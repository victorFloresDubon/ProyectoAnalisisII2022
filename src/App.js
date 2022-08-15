import React, {useState, useEffect} from "react";
import Body from "./components/Body";
import InicioBanner from "./components/InicioBanner";
import Grupos from "./components/Grupos";

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
