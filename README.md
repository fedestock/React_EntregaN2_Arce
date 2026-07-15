# NavegaLasRutas + Arce

Entrega 2 del Proyecto Final de React — implementación de navegación entre vistas
usando **React Router**.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Luego abrir la URL que muestra Vite (por defecto `http://localhost:5173`).

## Estructura del proyecto

```
src/
├── data/
│   └── products.js               → mock de productos + Promises con setTimeout
├── containers/                   → componentes contenedores (estado y efectos)
│   ├── ItemListContainer.jsx
│   └── ItemDetailContainer.jsx
├── components/                   → componentes de presentación (visual)
│   ├── NavBar.jsx / NavBar.css
│   ├── CartWidget.jsx / CartWidget.css
│   ├── ItemList.jsx / ItemList.css
│   ├── ItemCard.jsx / ItemCard.css
│   ├── ItemDetail.jsx / ItemDetail.css
│   ├── ItemCount.jsx / ItemCount.css
│   ├── Loader.jsx / Loader.css
│   └── NotFound.jsx / NotFound.css
├── styles/
│   └── global.css
├── App.jsx                       → BrowserRouter + Routes
└── main.jsx
```

## Rutas implementadas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `ItemListContainer` | Catálogo completo |
| `/category/:categoryId` | `ItemListContainer` | Catálogo filtrado por categoría |
| `/item/:itemId` | `ItemDetailContainer` | Vista detalle de un producto |
| `*` | `NotFound` | Ruta 404 |

## Requisitos de la entrega cubiertos

- **React Router** con `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`.
- **`useParams()`** en `ItemListContainer` e `ItemDetailContainer`.
- **División contenedor / presentacional:** los containers manejan estado y
  efectos, los components sólo estructura y estilos.
- **Promises con retardo:** `getProducts` y `getProductById` resuelven con
  `setTimeout` simulando una API.
- **`useEffect` con el parámetro de URL en las dependencias** para refrescar
  al navegar entre categorías o productos.
- **`Array.map()` con prop `key`** en `ItemList`.
- **Ruta 404** con `path="*"`.
- **`ItemCount`** incluido dentro de `ItemDetail`, listo para conectar al
  carrito en la próxima entrega.

## Autor

Federico Arce
