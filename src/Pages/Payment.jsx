import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setMessage("Payment Successful! Redirecting...");
    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Payment</h2>

      {message && <p className="text-center text-green-600 font-semibold">{message}</p>}

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="flex space-x-4">
          <div>
            <label className="block font-semibold text-gray-700">Expiry Date</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">CVV</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg transform transition-all hover:bg-indigo-700 hover:scale-105"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;
