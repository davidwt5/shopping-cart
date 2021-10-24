import "./ShoppingCartEntry.css"

function ShoppingCartEntry(props) {
  const {
    id,
    name,
    img,
    quantity,
    pricePerUnit,
    addQuantity,
    subtractQuantity,
  } = props;

  function addHandler(e) {
    addQuantity(Number(e.currentTarget.parentNode.dataset.id));
  }

  function subtractHandler(e) {
    subtractQuantity(Number(e.currentTarget.parentNode.dataset.id));
  }

  return (
    <li className="shopping-cart-entry" data-id={id}>
      <p>{name}</p>
      <img src={img} alt={name} />
      <button type="button" onClick={subtractHandler}>
        -
      </button>
      <input type="number" value={quantity} readOnly></input>
      <button type="button" onClick={addHandler}>
        +
      </button>
      <p>Price: {pricePerUnit * quantity}</p>
    </li>
  );
}

export default ShoppingCartEntry;
