import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; 

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Hamro Pasal</Link>
        </h1>
        <div className="flex space-x-6 items-center">
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/categories" className="hover:text-gray-300">Categories</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <SearchBar /> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
