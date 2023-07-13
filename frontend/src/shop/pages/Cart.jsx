import { useState } from "react";
import ShopLayout from "../layouts/ShopLayout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
    { id: 3, name: "Product 3", price: 20, quantity: 3 },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <ShopLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">Quantity</th>
                    <th className="py-2 px-4 border-b">Total</th>
                    <th className="py-2 px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b">{item.name}</td>
                      <td className="py-2 px-4 border-b">${item.price}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <button
                            className="text-gray-500 px-2"
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            className="w-20 py-1 px-2 border border-gray-300 rounded"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            className="text-gray-500 px-2"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b">
                        ${item.price * item.quantity}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <button
                          className="text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">
                Total: ${calculateTotal()}
              </h2>
              <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </ShopLayout>
  );
};

export default Cart;
