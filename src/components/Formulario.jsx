import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = ({ addTarea }) => {
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    state: "Pendiente",
    priority: true,
  });

  const { title, description, state, priority } = tarea;

  //Capturar los Datos armar el estado
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
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción obligatorios!",
      });
    }

    //Armar tarea para pasar
    addTarea({
      id: Date.now(),
      ...tarea,
      state: state === "completado",
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
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
        rows="3"
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
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default Formulario;
