import React, { useState } from "react";

function ProductForm({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] =
    useState("");
  const [category, setCategory] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      name,
      price: Number(price),
      category,
    };

    addProduct(newProduct);

    setName("");
    setPrice("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <button type="submit">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;