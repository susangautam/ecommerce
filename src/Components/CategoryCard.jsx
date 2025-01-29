import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${category.name}`}
      className="border p-6 rounded-lg shadow-md text-center bg-indigo-100 hover:bg-indigo-200 transition duration-300"
    >
      <h3 className="text-xl font-semibold text-indigo-600">{category.name}</h3>
    </Link>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
