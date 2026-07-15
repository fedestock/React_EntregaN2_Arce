import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);
  const [addedQty, setAddedQty] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setAdded(false);

    getProductById(itemId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [itemId]); // ← itemId en el array de dependencias

  const handleAdd = (quantity) => {
    // Se conectará al carrito en entregas futuras
    setAddedQty(quantity);
    setAdded(true);
  };

  if (loading) return <Loader message="Cargando producto…" />;
  if (error || !product) return <NotFound type="product" />;

  return (
    <ItemDetail
      product={product}
      onAdd={handleAdd}
      added={added}
      quantity={addedQty}
    />
  );
};

export default ItemDetailContainer;
