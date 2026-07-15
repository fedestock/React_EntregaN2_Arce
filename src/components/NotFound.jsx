import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = ({ type = "page" }) => {
  const isProduct = type === "product";

  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">
        {isProduct ? "Producto no encontrado" : "Página no encontrada"}
      </h1>
      <p className="not-found__desc">
        {isProduct
          ? "El producto que buscás no existe o fue removido del catálogo."
          : "La URL que ingresaste no corresponde a ninguna sección de la tienda."}
      </p>
      <Link to="/" className="not-found__back">
        Volver al catálogo
      </Link>
    </div>
  );
};

export default NotFound;
