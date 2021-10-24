import "./ProductOverview.css"

function ProductOverview(props) {
  const { id, name, img, price, quantity } = props;
  return (
    <div className="product-overview" data-id={id}>
      <p className="name">{name}</p>
      <img src={img} alt={name} />
      <p className="price">${price}</p>
      <button type="button">-</button>
      <input type="number" value={quantity}></input>
      <button type="button">+</button>
    </div>
  );
}

export default ProductOverview;
