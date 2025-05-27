import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
