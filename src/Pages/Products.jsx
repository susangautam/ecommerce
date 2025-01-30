import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../Components/ProductCard";

function Products() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");
  const category = new URLSearchParams(search).get("category");

  let filteredProducts = products;

  if (query) {
    filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  } else if (category) {
    filteredProducts = products.filter((p) => p.category === category);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cover">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
