import { useState } from "react";

const Controlado = () => {
  const [error, setError] = useState("");
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    state: "Pendiente",
    priority: true,
  });

  const { title, description, state, priority } = tarea;

  //Capturar los Datos
  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar datos
    if (!title || !description) return setError("Llena todos los campos");

    //Quitar Mensaje de Error
    setError("");

    //Enviar los datos
    alert(`Titulo: ${title}
          Descripción: ${description}
          Estado: ${state}
          Prioridad: ${priority}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingrese Descripción"
        className="form-control mb-3"
        name="description"
        value={description}
        onChange={handleChange}
        cols="30"
        rows="10"
      ></textarea>
      <div className="form-check">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>
      <select
        className="form-select mb-3"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit">Procesar</button>
      {error !== "" && error}
    </form>
  );
};

export default Controlado;
