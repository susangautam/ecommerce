import categories from "../data/categories";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-600 text-center mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.name}`}
            className="flex justify-center items-center text-center border-2 border-indigo-500 p-6 rounded-lg shadow-lg transform transition-all hover:bg-indigo-100 hover:scale-105"
          >
            <span className="text-lg font-semibold text-indigo-700">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
