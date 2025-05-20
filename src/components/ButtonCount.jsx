import { useState } from "react";

const ButtonCount = () => {
  const [count, setCount] = useState(1);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Contador automático</h2>
      <button onClick={handleCount}>Contador: {count}</button>
    </>
  );
};

export default ButtonCount;
