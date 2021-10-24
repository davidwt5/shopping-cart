import "./ProductOverview.css";

function ProductOverview(props) {
  const { id, name, img, price, quantity, addQuantity, subtractQuantity } =
    props;

  function addHandler(e) {
    console.log(Number(e.currentTarget.parentNode.dataset.id));
    addQuantity(Number(e.currentTarget.parentNode.dataset.id));
  }

  function subtractHandler(e) {
    subtractQuantity(Number(e.currentTarget.parentNode.dataset.id));
  }

  return (
    <div className="product-overview" data-id={id}>
      <p className="name">{name}</p>
      <img src={img} alt={name} />
      <p className="price">${price}</p>
      <button type="button" onClick={subtractHandler}>
        -
      </button>
      <input type="number" value={quantity} readOnly></input>
      <button type="button" onClick={addHandler}>
        +
      </button>
    </div>
  );
}

export default ProductOverview;
