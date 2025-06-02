import { useState } from "react";

function App() {
  const [str, setStr] = useState(0);
  const setChange = (e) => {
    setStr(e);
    console.log(e);
    console.log("str:: " + str);
  };

  return (
    <div>
      <input
        type="text"
        value="str"
        onChange={() => {
          // setChange(e);
        }}
      />
    </div>
  );
}

export default App;
