import Loggeado from "../components/Loggeado";
import NoLoggeado from "../components/NoLoggueado";

const Welcome = ({ user }) => {
  return (
    <>
      <h2>Ingresó un nuevo usuario</h2>
      {user ? <Loggeado /> : <NoLoggeado />}
    </>
  );
};

export default Welcome;
