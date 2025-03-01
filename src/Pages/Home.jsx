import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/public/e-commerce.jpg')", 
      }}
    >
     
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white p-8 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold  mb-6">
          Welcome to <span className="text-white">Hamro Pasal</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
          Discover the best deals on electronics, fashion, and home essentials. Shop with confidence!
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-6">
          <Link
            to="/products"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all hover:bg-indigo-700 hover:scale-105"
          >
            🛍️ Shop Now
          </Link>
          <Link
            to="/categories"
            className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all hover:bg-orange-700 hover:scale-105"
          >
            🔍 Browse Categories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
