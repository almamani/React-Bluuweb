import ItemTecno from "./ItemTecno";

const ListTecno = ({ tecnologias }) => {
  return (
    <>
      <h2 className="space_mini_inferior">Listado de Tecnologías</h2>
      <ul>
        {tecnologias.map((tecnologia, index) => (
          <ItemTecno tecnologia={tecnologia} key={index} />
        ))}
      </ul>
    </>
  );
};

export default ListTecno;
