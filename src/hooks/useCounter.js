import { useState } from "react";

//1 Crear un archivo useNombreHook.js
//2 Incluir una función con el nombre del hook que debe ser exportada
//3 Dentro de este hook definir las funciones y valores que brindará el hook.
//3A Tener en cuenta que debe recibir un valor incial que se pasa por parámetro
//4 Incluir en el hook un retunr con estas funciones y valores.

const useCounter = (valorInicial = 0) => {
  const [count, setCount] = useState(valorInicial);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const resetear = () => setCount(valorInicial);

  return { count, incrementar, decrementar, resetear };
};

export default useCounter;
