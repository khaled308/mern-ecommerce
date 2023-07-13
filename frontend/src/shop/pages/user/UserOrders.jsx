import { FaTimes, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShopLayout from "../../layouts/ShopLayout";
import { orders } from "../../../../dump-data";
import { useParams } from "react-router-dom";

const UserOrders = () => {
  const { id } = useParams();
  const userOrders = orders.filter((order) => order.userId === id);

  if (userOrders.length === 0) {
    return (
      <ShopLayout>
        <div>No orders found for this user.</div>
      </ShopLayout>
    );
  }

  return (
    <ShopLayout>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Paid
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delivered
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userOrders.map((order) => (
              <tr
                key={order.id}
                className={order.delivered ? "bg-green-100" : ""}
              >
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.paid ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.delivered ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/user/${id}/orders/${order.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ShopLayout>
  );
};

export default UserOrders;
