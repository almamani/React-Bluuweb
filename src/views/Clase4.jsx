import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Clase4 = () => {
  const [count1, setCount1] = useState(0);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading)
    return <h2 className="color_sky_blue mt-4 text-center">Cargando...</h2>;
  if (error)
    return <h2 className="color_sky_blue mt-4 text-center">{error}</h2>;
  return (
    <div className="contenedor contenedor__centrado">
      <h1 className="space_mini_inferior">Tutorial React</h1>
      <h2 className="color_sky_blue">Clase 4 - Practica useEffect</h2>

      <h3 className="space_mini_inferior">Contador 1</h3>
      <button onClick={() => setCount1(count1 + 1)}>
        Contador 1: {count1}
      </button>
      <br />
      <br />

      <h2 className="color_sky_blue">Listado de Usuarios</h2>
      <ul>
        {data.map((user) => (
          <li className="space_mini_inferior" key={user.id}>
            <h4>{user.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clase4;
