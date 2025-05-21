import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Capturar los Datos
    const title = form.current.title.value;
    const description = form.current.description.value;
    const state = form.current.state.value;

    //Validar datos
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("Llena todos los campos");

    //Enviar los datos
    alert(`Titulo: ${title}
          Descripción: ${description}
          Estado: ${state}`);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-3"
        name="title"
      />
      <textarea
        placeholder="Ingrese Descripción"
        className="form-control mb-3"
        name="description"
        cols="30"
        rows="10"
      ></textarea>
      <select className="form-select mb-3" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit">Procesar</button>
      {error !== "" && error}
    </form>
  );
};

export default NoControlado;
