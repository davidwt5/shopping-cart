import React, { useState, useEffect } from "react";
import ProductOverview from "./ProductOverview";
import "./Shop.css";

function Shop() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]); // Cart is empty initially. No persistence.

  // Fetches the products
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setProduct(products);
    }

    fetchProducts();
  }, []);

  // Initialise cart
  useEffect(() => {
    products.forEach(p => {
      setCart((prevCart) => [...prevCart, {id: p.id, quantity: 0}]);
    });
  }, [products]);

  return (
    <div className="shop">
      <h1>Browsing all products</h1>
      <div className="products">
        {products.map((p) => (
          <ProductOverview
            key={p.id}
            id={p.id}
            name={p.title}
            price={p.price}
            img={p.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
