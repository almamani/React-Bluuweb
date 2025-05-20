import { useState } from "react";

const useContador = (valorInicial) => {
  const [valor, setValor] = useState(valorInicial);

  const incrementar = () => setValor((prev) => prev + 1);
  const decrementar = () => setValor((prev) => prev - 1);
  const resetear = () => setValor(valorInicial);

  return { valor, incrementar, decrementar, resetear };
};

export default useContador;
