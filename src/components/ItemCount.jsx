import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => setCount((c) => Math.max(1, c - 1));
  const increment = () => setCount((c) => Math.min(stock, c + 1));

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button
          className="item-count__btn"
          onClick={decrement}
          disabled={count <= 1}
          aria-label="Restar unidad"
        >
          −
        </button>
        <span className="item-count__value">{count}</span>
        <button
          className="item-count__btn"
          onClick={increment}
          disabled={count >= stock}
          aria-label="Sumar unidad"
        >
          +
        </button>
      </div>

      <button
        className="item-count__add"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
