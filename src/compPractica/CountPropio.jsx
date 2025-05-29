import useCount from "../hooks/useCounter";

//5 Importar el hook propio
//6 Definirlo dentro del coponente desestructurando las funciones y valores que utilizaremos
//7 Utilizar las fuciones y valores traídos del hook.

const CountPropio = () => {
  const { count, incrementar, decrementar, resetear } = useCount();
  return (
    <div>
      <h3 className="space_mini_inferior">Valor del Contador: {count}</h3>
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        <button onClick={resetear}>Reset</button>
      </div>
    </div>
  );
};

export default CountPropio;
