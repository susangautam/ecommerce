import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-2">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
