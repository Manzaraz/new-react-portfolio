import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };

  return (
    <div class="container">
      <h1>¡Hola Manzi!</h1>
      <button onClick={handleClick}>press this!</button>
      <div>
        <strong>{counter}</strong>
      </div>
    </div>
  );
};

export default App;
