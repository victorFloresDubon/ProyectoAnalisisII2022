import React, {useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
  // Actualiza el título del documento usando la API del navegador
  document.title = `You clicked ${count} times`;});

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
