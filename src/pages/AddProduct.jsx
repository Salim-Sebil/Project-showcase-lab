import React from "react";
import ProductForm from "../components/ProductForm";

function AddProduct({ addProduct }) {
  return (
    <div>
      <h2>Add Product</h2>

      <ProductForm
        addProduct={addProduct}
      />
    </div>
  );
}

export default AddProduct;