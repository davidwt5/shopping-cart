import "./ProductOverview.css";

function ProductOverview(props) {
  const { id, name, img, price, quantity, addQuantity, subtractQuantity } =
    props;

  return (
    <div className="product-overview" data-id={id}>
      <p className="name">{name}</p>
      <img src={img} alt={name} />
      <p className="price">${price}</p>
      <button
        type="button"
        onClick={(e) => subtractQuantity(Number(e.currentTarget.parentNode.dataset.id))}
      >
        -
      </button>
      <input type="number" value={quantity}></input>
      <button
        type="button"
        onClick={(e) => addQuantity(Number(e.currentTarget.parentNode.dataset.id))}
      >
        +
      </button>
    </div>
  );
}

export default ProductOverview;
