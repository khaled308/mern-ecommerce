import ShopLayout from "../layouts/ShopLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  changeQuantity,
  decreasingQuantity,
  increaseQuantity,
} from "../../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (item, quantity) => {
    dispatch(changeQuantity({ item, quantity }));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreasingQuantity(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(addToCart(item));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
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
                    <tr key={item._id}>
                      <td className="py-2 px-4 border-b">{item.name}</td>
                      <td className="py-2 px-4 border-b">${item.price}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <button
                            className="text-gray-500 px-2"
                            onClick={() => handleDecreaseQuantity(item)}
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
                                item,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            className="text-gray-500 px-2"
                            onClick={() => handleIncreaseQuantity(item)}
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
                          onClick={() => handleRemoveItem(item)}
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
