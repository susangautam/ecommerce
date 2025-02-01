import { useContext } from "react"; 
import { CartContext } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <FaShoppingCart className="text-indigo-600 w-8 h-8 mr-2" />
        <h2 className="text-3xl font-bold text-indigo-600 text-center">Shopping Cart</h2>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transform transition-all hover:bg-orange-700 hover:scale-105"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-gray-700">Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/payment">
              <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transform transition-all hover:bg-indigo-700 hover:scale-105">
                Proceed to Payment
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
