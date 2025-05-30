import { useRef, useState } from "react";

//1 importar useRef
//2 declarar una varialble para usar el hook
//const form = useRef(null);
//En la etiqueta form agregar ref={form}
//Tomar los valores de cada input utilizando current
//const user = form.current.user.value;

const NoControled = () => {
  const form = useRef(null);
  const [error, setError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Captura de Datos
    const user = form.current.user.value;
    const password = form.current.password.value;

    //Validar datos
    if (!user.trim() || !password.trim())
      return setError("Llena todos los campos");

    //Limpiar Mensaje Error Procesar datos
    setError(" ");
    alert(`Usuario: ${user} 
          Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Usuario"
        className="form-control mb-3"
        name="user"
      />
      <input
        type="text"
        placeholder="Password"
        className="form-control mb-3"
        name="password"
      />
      <button type="submit">Procesar</button>
      {error !== "" && error}
    </form>
  );
};

export default NoControled;
