import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { categories } from "../data/products";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd, added, quantity }) => {
  const {
    title,
    description,
    price,
    image,
    category,
    rating,
    stock,
  } = product;

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);

  const catLabel = categories.find((c) => c.id === category)?.label ?? category;
  const stars = Math.round(rating);

  return (
    <div className="item-detail">
      <nav className="item-detail__breadcrumb">
        <Link to="/">Catálogo</Link>
        <span>/</span>
        <Link to={`/category/${category}`}>{catLabel}</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>

      <div className="item-detail__layout">
        <div className="item-detail__image-wrap">
          <img src={image} alt={title} className="item-detail__image" />
          <span className="item-detail__cat-badge">{catLabel}</span>
        </div>

        <div className="item-detail__info">
          <div className="item-detail__rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`item-detail__star${i < stars ? " item-detail__star--filled" : ""}`}
              >
                ★
              </span>
            ))}
            <span className="item-detail__rating-num">{rating} / 5</span>
          </div>

          <h1 className="item-detail__title">{title}</h1>
          <p className="item-detail__price">{formattedPrice}</p>
          <p className="item-detail__desc">{description}</p>

          <div className="item-detail__stock">
            {stock > 5 ? (
              <span className="item-detail__in-stock">✓ En stock ({stock} disponibles)</span>
            ) : stock > 0 ? (
              <span className="item-detail__low-stock">⚠ Últimas {stock} unidades</span>
            ) : (
              <span className="item-detail__no-stock">✗ Sin stock</span>
            )}
          </div>

          {!added ? (
            <ItemCount stock={stock} onAdd={onAdd} />
          ) : (
            <div className="item-detail__added">
              <p className="item-detail__added-msg">
                ✓ {quantity} {quantity === 1 ? "unidad agregada" : "unidades agregadas"} al carrito
              </p>
              <Link to="/" className="item-detail__continue">
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
