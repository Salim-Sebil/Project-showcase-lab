import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products({
  products,
  updatePrice,
}) {
  const [search, setSearch] =
    useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
      <h2>Products Inventory</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updatePrice={updatePrice}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;