import logReact from "../assets/react.svg";
import ButtonCount from "../components/ButtonCount";
import ContPropio from "../components/contPropio";
import ListTecno from "../components/ListTecno";
import MyButton from "../components/MyButton";
import Welcome from "../components/Welcome";

const Clase1 = () => {
  const subtitle = "Clase 1 - Fundamentos";
  const texto = "Boton 2";
  const user = true;
  const tecnologias = ["HTML5", "Javascript", "Css3"];

  return (
    <div className="contenedor contenedor__centrado">
      <h1>Tutorial React</h1>
      <h2>{subtitle}</h2>
      <img
        className="space_inferior1"
        src={logReact}
        alt="Logo React"
        style={{ width: "200px" }}
      />
      <br />

      <div>
        <MyButton text="Boton 1" />
        <MyButton text={texto} />
        <MyButton text="Boton 3" />
      </div>
      <br />

      <Welcome user={user} />
      <br />

      <ListTecno tecnologias={tecnologias} />
      <br />

      <ButtonCount />
      <br />

      <ContPropio inicial={5} />
    </div>
  );
};

export default Clase1;
