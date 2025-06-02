import Controled from "../compPractica/Controled";
import CountPropio from "../compPractica/CountPropio";
import FormAgenda from "../compPractica/FormAgenda";
import NoControled from "../compPractica/NoControled";
import Temporizador from "../compPractica/Temporizador";

const Clase7 = () => {
  return (
    <div className="contenedor contenedor__centrado">
      <h1 className="space_mini_inferior">Tutorial React</h1>
      <h2 className="color_sky_blue">Clase 7 - Practicas Varias</h2>
      <br />
      <br />
      <h3 className="color_pink">
        Práctica con Hook personalizado - Contador Simple
      </h3>
      <br />
      <CountPropio />
      <br />
      <br />
      <h3 className="color_pink">Práctica Formulario No contolado</h3>
      <br />
      <NoControled />
      <br />
      <br />
      <h3 className="color_pink">Formulario Controlado</h3>
      <br />
      <Controled />
      <br />
      <br />
      <h3 className="color_pink">Ejemplo setInterval - Temporizador</h3>
      <br />
      <Temporizador />
      <br />
      <br />
      <h3 className="color_pink">Formulario Carga Agenda</h3>
      <FormAgenda />
    </div>
  );
};

export default Clase7;
