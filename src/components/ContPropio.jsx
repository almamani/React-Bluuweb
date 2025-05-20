import useContador from "../hooks/useContador";

const ContPropio = ({ inicial }) => {
  const { valor, incrementar, decrementar, resetear } = useContador(inicial);

  return (
    <div className="contenedor contenedor__centrado">
      <h2>Contador via Hook Propio</h2>
      <h3 className="space_mini_inferior">Valor del Contador: {valor}</h3>
      <button className="space_mini_inferior" onClick={incrementar}>
        +
      </button>
      <button className="space_mini_inferior" onClick={decrementar}>
        -
      </button>
      <button className="space_mini_inferior" onClick={resetear}>
        Reset
      </button>
    </div>
  );
};

export default ContPropio;
