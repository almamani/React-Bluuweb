import { useState } from "react";

//1 Establecer un estado para la carga de datos
//const [data, setData] = useState({});
/* 2 En el control, ejemplo input, necesitamos definir:
        name="user"
        value={user}
        onChange={handleChange}*/
/* 3 Nuestro handleChange debe vincular el control con el estado
  setData({
      ...data,
      [e.target.name]: e.target.value,
    });
*/

const Controled = () => {
  const [error, setError] = useState(" ");
  const [data, setData] = useState({ user: "", password: "" });

  const { user, password } = data;

  //Capturar los datos
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar datos
    if (!user || !password) return setError("Llena todos los campos");

    //Quitar Mensaje de Error
    setError("");

    //Enviar los datos
    alert(`Usuario: ${user} Password: ${password}`);

    //Limpieza Formulario
    setData({ user: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Usuario"
        className="form-control mb-3"
        name="user"
        value={user}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Ingrese Password"
        className="form-control mb-3"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button>Procesar</button>
      {error !== "" && error}
    </form>
  );
};

export default Controled;
