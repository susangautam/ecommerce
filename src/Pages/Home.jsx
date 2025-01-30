import { Link } from "react-router-dom";

function Home() {
  return (
    <div 
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
    >
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 drop-shadow-lg">
        Welcome to Hamro Pasal
      </h1>
      <div className="mt-8 flex justify-center space-x-6">
        <Link
          to="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all hover:bg-indigo-700 hover:scale-105"
        >
          Shop Now
        </Link>
        <Link
          to="/categories"
          className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all hover:bg-orange-700 hover:scale-105"
        >
          Browse Categories
        </Link>
      </div>
    </div>
  );
}

export default Home;
