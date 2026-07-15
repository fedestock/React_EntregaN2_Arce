import "./Loader.css";

const Loader = ({ message = "Cargando productos…" }) => (
  <div className="loader">
    <div className="loader__spinner" />
    <p className="loader__msg">{message}</p>
  </div>
);

export default Loader;
