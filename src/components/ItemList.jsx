import ItemCard from "./ItemCard";
import "./ItemList.css";

const ItemList = ({ products, categoryLabel }) => {
  return (
    <section className="item-list">
      <header className="item-list__header">
        <h1 className="item-list__title">
          {categoryLabel ? categoryLabel : "Catálogo"}
        </h1>
        <p className="item-list__count">
          {products.length} {products.length === 1 ? "producto" : "productos"}
        </p>
      </header>

      <div className="item-list__grid">
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ItemList;
