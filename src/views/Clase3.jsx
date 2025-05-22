import { useEffect, useState } from "react";
import Formulario from "../components/Formulario";
import Tareas from "../components/Tareas";
//import initialStateTodos from "../mocks/initialStateTodos";

const initialStateTareas = JSON.parse(localStorage.getItem("tareas")) || [];

const Clase3 = () => {
  const [tareas, setTareas] = useState(initialStateTareas);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const addTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  const deleteTarea = (id) => {
    const newArray = tareas.filter((tarea) => tarea.id !== id);
    setTareas(newArray);
  };

  const updateTarea = (id) => {
    const newArray = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.state = !tarea.state;
      }
      return tarea;
    });
    setTareas(newArray);
  };

  const orderTarea = (arrayTareas) => {
    return arrayTareas.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };

  return (
    <div className="contenedor">
      <h1 className="space_mini_inferior">Tutorial React</h1>
      <h2 className="color_sky_blue">Clase 3 - Formulario Tareas</h2>
      <br />
      <Formulario addTarea={addTarea} />
      <br />
      <br />
      <Tareas
        tareas={orderTarea(tareas)}
        deleteTarea={deleteTarea}
        updateTarea={updateTarea}
      />
    </div>
  );
};

export default Clase3;
