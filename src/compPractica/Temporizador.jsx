import { useState, useEffect } from "react";

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    /*  const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000); */
    //Cleanup: Limpiar el intervalo al desmontar
    /*  return () => clearInterval(intervalo); */
  }, []);

  return <h3>Tiempo transcurrido: {segundos} segundos</h3>;
};

export default Temporizador;
