import { useUserContext } from "../context/UserContext";

const Clase6 = () => {
  const { user } = useUserContext();
  return (
    <div className="contenedor contenedor__centrado">
      <h1 className="space_mini_inferior">Tutorial React</h1>
      <h2 className="color_sky_blue">Clase 6 - Context Dashboard</h2>
      <h3>{`Bienvenida: ${user?.name}`}</h3>
    </div>
  );
};

export default Clase6;
