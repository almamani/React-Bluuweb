import Tarea from "../components/Tarea";

const Tareas = ({ tareas, deleteTarea, updateTarea }) => {
  return (
    <div>
      <h2 className="color_sky_blue space_mini_inferior">Listado de Tareas</h2>
      <br />
      <ul className="list-group">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            deleteTarea={deleteTarea}
            updateTarea={updateTarea}
          />
        ))}
        {tareas.length === 0 && (
          <li className="list-group-item text-center">SIN TAREAS</li>
        )}
      </ul>
    </div>
  );
};

export default Tareas;
