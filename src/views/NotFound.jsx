import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="contenedor contenedor__centrado">
      <h1>404</h1>
      <h2 className="color_sky_blue">Page not found</h2>
      <h3>{error.statusText || error.message}</h3>
      <Link to="/">
        <h4 className="color_sky_blue">Volver al Home</h4>
      </Link>
    </div>
  );
};

export default NotFound;
