import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ product }) => {
  const { id, title, price, image, category, rating, stock } = product;

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);

  const stars = Math.round(rating);

  return (
    <article className="item-card">
      <Link to={`/item/${id}`} className="item-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="item-card__image"
          loading="lazy"
        />
        <span className="item-card__category">{category}</span>
        {stock <= 5 && (
          <span className="item-card__stock-alert">¡Quedan {stock}!</span>
        )}
      </Link>

      <div className="item-card__body">
        <div className="item-card__rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`item-card__star ${i < stars ? "item-card__star--filled" : ""}`}
            >
              ★
            </span>
          ))}
          <span className="item-card__rating-num">{rating}</span>
        </div>

        <h2 className="item-card__title">{title}</h2>
        <p className="item-card__price">{formattedPrice}</p>

        <Link to={`/item/${id}`} className="item-card__cta">
          Ver producto
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;
