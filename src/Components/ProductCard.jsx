import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../Context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 shadow-md rounded-lg hover:shadow-xl transition duration-200">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-70 object-contain rounded-t-lg" 
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500 text-sm italic">{product.category}</p>
      <p className="text-gray-700 text-xl mb-2">Rs {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded hover:bg-indigo-500 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
