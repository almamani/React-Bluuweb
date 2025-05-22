const Tarea = ({ tarea, deleteTarea, updateTarea }) => {
  const { id, title, description, state, priority } = tarea;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p className={`${state && "text-decoration-line-through"}`}>
            {description}
          </p>
        </div>
        <div className="d-flex gap-2 mb-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteTarea(id)}
          >
            Eliminar
          </button>
          <button onClick={() => updateTarea(id)}>Actualizar</button>
        </div>
        <span className="badge text-bg-danger">
          {priority && "Prioritario"}
        </span>
      </div>
    </li>
  );
};

export default Tarea;
