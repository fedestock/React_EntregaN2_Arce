import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, categories } from "../data/products";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [categoryId]); // ← categoryId en el array de dependencias

  // Validar que la categoría exista
  const validCategory =
    !categoryId || categories.some((c) => c.id === categoryId);

  if (!validCategory) return <NotFound />;
  if (loading) return <Loader />;
  if (error) return <NotFound />;

  const catLabel = categoryId
    ? categories.find((c) => c.id === categoryId)?.label
    : null;

  return <ItemList products={products} categoryLabel={catLabel} />;
};

export default ItemListContainer;
