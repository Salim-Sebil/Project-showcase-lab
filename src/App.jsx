import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     price: 1200,
  //     category: "Electronics",
  //     image:
  //     "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  //   stock: 10,
  //   },
  //   {
  //     id: 2,
  //     name: "Phone",
  //     price: 800,
  //     category: "Electronics",
  //     image:
  //     "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  //   stock: 10,
  //   },
  //   {
  //   id: 3,
  //   name: "Laptop",
  //   price: 1200,
  //   category: "Electronics",
  //   image:
  //     "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  //   stock: 10,
  // },

  // {
  //   id: 4,
  //   name: "Smartphone",
  //   price: 800,
  //   category: "Electronics",
  //   image:
  //     "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  //   stock: 15,
  // },

  // {
  //   id: 5,
  //   name: "Headphones",
  //   price: 150,
  //   category: "Accessories",
  //   image:
  //     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  //   stock: 20,
  // },

  // {
  //   id: 6,
  //   name: "Gaming Mouse",
  //   price: 60,
  //   category: "Accessories",
  //   image:
  //     "https://images.unsplash.com/photo-1527814050087-3793815479db",
  //   stock: 30,
  // },

  // {
  //   id: 7,
  //   name: "Keyboard",
  //   price: 90,
  //   category: "Accessories",
  //   image:
  //     "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  //   stock: 12,
  // },

  // {
  //   id: 8,
  //   name: "Monitor",
  //   price: 300,
  //   category: "Electronics",
  //   image:
  //     "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
  //   stock: 8,
  // },
  // ]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  //fetching data from db.json storage
  function fetchProducts() {
    
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); 
      })
      .catch((error) =>
        console.error("Error fetching products:", error)
      );
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  // Add product
  function addProduct(product) {
    //setProducts([...products, product]);

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) =>
        response.json()
      )
      .then((addedProduct) => {
        setProducts([
          ...products,
          addedProduct,
        ]);
      });
  }

  

  // Update price
  function updatePrice(id, newPrice) {
  //   const updatedProducts = products.map(
  //     (product) => {
  //       if (product.id === id) {
  //         return {
  //           ...product,
  //           price: newPrice,
  //         };
  //       }

  //       return product;
  //     }
  //   );

  //   setProducts(updatedProducts);
  // }
  fetch(
      `http://localhost:3000/products/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          newPrice
        ),
      }
    )
      .then((response) =>
        response.json()
      )
      .then((updatedProduct) => {
        const updatedProducts =
          products.map((product) => {
            if (
              product.id === updatedProduct.id
            ) {
              return updatedProduct;
            }

            return product;
          });

        setProducts(updatedProducts);
      });

      useEffect(() => {
        fetchProducts();
      }, []);
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              updatePrice={updatePrice}
            />
          }
        />

        <Route
          path="/add-product"
          element={
            <AddProduct
              addProduct={addProduct}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//  useEffect(() => {
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(response => response.json())
//             .then(data => {
//                 setDogImage(data.message);
//                 setLoading(false);
//             })
//             .catch(error => console.error('Error fetching dog image:', error));
// //     }, []);
// function addProduct(newProduct) {
//     fetch("http://localhost:3001/products", {
//       method: "POST",
//       headers: {
//         "Content-Type":
//           "application/json",
//       },
//       body: JSON.stringify(newProduct),
//     })
//       .then((response) =>
//         response.json()
//       )
//       .then((addedProduct) => {
//         setProducts([
//           ...products,
//           addedProduct,
//         ]);
//       });
//   }



//   // UPDATE PRODUCT (EDIT)
//   function updateProduct(
//     id,
//     updatedData
//   ) {
//     fetch(
//       `http://localhost:3001/products/${id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type":
//             "application/json",
//         },
//         body: JSON.stringify(
//           updatedData
//         ),
//       }
//     )
//       .then((response) =>
//         response.json()
//       )
//       .then((updatedProduct) => {
//         const updatedProducts =
//           products.map((product) => {
//             if (
//               product.id === updatedProduct.id
//             ) {
//               return updatedProduct;
//             }

//             return product;
//           });

//         setProducts(updatedProducts);
//       });
//   }