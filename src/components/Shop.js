import React, { useState, useEffect } from "react";
import ProductOverview from "./ProductOverview";
import ShoppingCart from "./ShoppingCart";
import "./Shop.css";

function Shop() {
  const [cart, setCart] = useState([]); // Cart is empty initially. No persistence.
  const [products, setProduct] = useState([]);

  // Fetches the products
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setProduct(products);
    }

    fetchProducts();
  }, []);

  function addQuantity(productId) {
    const cartCopy = [...cart];
    let i = cartCopy.findIndex((p) => p.id === productId);
    // If entry doesn't exist, create new entry
    if (i === -1) {
      cartCopy.push({ id: productId, quantity: 0 });
      i = cartCopy.length - 1;
    }
    cartCopy[i].quantity++;
    setCart(cartCopy);
  }

  function subtractQuantity(productId) {
    const cartCopy = [...cart];
    let i = cartCopy.findIndex((p) => p.id === productId);
    // Exit if the entry doesn't exist
    if (i === -1) return;
    cartCopy[i].quantity === 1 ? cartCopy.splice(i, 1) : cartCopy[i].quantity--;
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
            // Render quantity 0 if item is not in cart.
            quantity={
              cart.find((e) => e.id === p.id)
                ? cart.find((e) => e.id === p.id).quantity
                : 0
            }
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
          />
        ))}
      </div>

      <ShoppingCart
        products={products}
        cart={cart}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
      />
    </div>
  );
}

export default Shop;
