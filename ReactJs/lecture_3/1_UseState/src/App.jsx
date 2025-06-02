import { useState } from "react";

function App() {
  const [number, setnumber] = useState(0);
  const increase = () => {
    setnumber(number + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default App;
