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
    products.forEach((p) => {
      setCart((prevCart) => [...prevCart, { id: p.id, quantity: 0 }]);
    });
  }, [products]);

  function addQuantity(productId) {
    const cartCopy = [...cart];
    const i = cartCopy.findIndex((p) => p.id === productId);
    cartCopy[i].quantity++;
    setCart(cartCopy);
  }

  function subtractQuantity(productId) {
    const cartCopy = [...cart];
    const i = cartCopy.findIndex((p) => p.id === productId);
    cartCopy[i].quantity <= 0
      ? (cartCopy[i].quantity = 0)
      : cartCopy[i].quantity--;
    setCart(cartCopy);
  }

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
            quantity={
              cart.find((e) => e.id === p.id)
                ? cart.find((e) => e.id === p.id).quantity
                : ""
            }
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
