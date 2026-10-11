import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="border rounded p-3 flex flex-col gap-2 hover:shadow"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <h3 className="font-semibold text-sm">{product.title}</h3>
      <p>$ {product.price}</p>
    </Link>
  );
};

export default ProductCard;