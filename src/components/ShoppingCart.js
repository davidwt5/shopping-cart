import ShoppingCartEntry from "./ShoppingCartEntry";
import "./ShoppingCart.css"

function ShoppingCart(props) {
  const { products, cart, addQuantity, subtractQuantity } = props;

  return (
    <div className="shopping-cart">
      <button type="button">X</button>
      <p>Your Cart</p>
      <button type="button">Checkout</button>
      <ul>
        {cart.map((p) => {
          const productDetails = products.find((e) => e.id === p.id);
          return (
            <ShoppingCartEntry
              key={p.id}
              id={p.id}
              name={productDetails.title}
              img={productDetails.image}
              quantity={p.quantity}
              pricePerUnit={productDetails.price}
              addQuantity={addQuantity}
              subtractQuantity={subtractQuantity}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingCart;
