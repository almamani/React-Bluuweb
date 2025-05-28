import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ name: "Andreita" });
    navigate("/clase6/");
  };

  return (
    <div className="contenedor contenedor__centrado">
      <h1 className="color_sky_blue">Tutorial React</h1>
      <h2>Home</h2>
      <br />
      <br />
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Clase</th>
            <th scope="col">Contenido</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-center">
              <Link to={`/clase1/`}>1</Link>
            </th>
            <td>Fundamentos</td>
            <td>
              Ejercicios combinados con Props, Variables, Imagenes, Intro
              useState Contador, Hooks propio básico.
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-center">
              <Link to={`/clase2/`}>2</Link>
            </th>
            <td>Formulario Controlado / No Controlado</td>
            <td>
              Formulario controlado: conexión entre campo y estado (value,
              onChange). No Controlado: uso useRef, current para tomar los
              valores.
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-center">
              <Link to={`/clase3/`}>3</Link>
            </th>
            <td>Practica Tareas</td>
            <td>
              Formulario controlado, UseEffect, localStorage, agregar, quitar,
              modificar tarea.
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-center">
              <Link to={`/clase4/`}>4</Link>
            </th>
            <td>useEffect - Hook personalizado - useFetch</td>
            <td>
              Utilizando Fetch en un Hook personalizado nos traemos los datos de
              los usuarios (nos traemos del hook la data,loading y error).
              useCallback
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-center">
              <Link to={`/clase5/`}>5</Link>
            </th>
            <td>Práctica Posteos - React-router-dom</td>
            <td>
              Uso de react-router-dom para generar la Nabar, uso del Link,
              traemos los datos con useLoaderData, combinando con index, loader,
              createBrowserRouter.
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-center">
              <button onClick={handleLogin}>6</button>
            </th>
            <td>Uso de Context - Logout</td>
            <td>
              Implementamos contex con el usuario habilitamos la clase 6 y la
              podemos desloguear.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
