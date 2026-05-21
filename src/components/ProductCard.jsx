import  { useState } from "react";

function ProductCard({
  product,
  updatePrice,
}) {
  const [newPrice, setNewPrice] =
    useState(product.price);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>
        Category: {product.category}
      </p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      <input
        type="number"
        value={newPrice}
        onChange={(e) =>
          setNewPrice(e.target.value)
        }
      />

      <button
        onClick={() =>
          updatePrice(
            product.id,
            Number(newPrice)
          )
        }
      >
        Update Price
      </button>
    </div>
  );
}

export default ProductCard;