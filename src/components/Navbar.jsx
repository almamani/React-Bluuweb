import { NavLink } from "react-router-dom";

import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();

  const handleLogout = () => {
    setUser(false);
    //Si querés reemplazar la ruta en el historial (evitar que el usuario pueda volver con el botón "Atrás")
    //navigate("/", { replace: true });
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>
        <NavLink to="/clase1" className="btn btn-outline-primary">
          Clase 01
        </NavLink>
        <NavLink to="/clase2" className="btn btn-outline-primary">
          Clase 02
        </NavLink>
        <NavLink to="/clase3" className="btn btn-outline-primary">
          Clase 03
        </NavLink>
        <NavLink to="/clase4" className="btn btn-outline-primary">
          Clase 04
        </NavLink>
        <NavLink to="/clase5" className="btn btn-outline-primary">
          Clase 05
        </NavLink>
        {user && (
          <>
            <NavLink to="/clase6" className="btn btn-outline-primary">
              Clase 06
            </NavLink>
            <button onClick={handleLogout}>Logout Clase 6</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
