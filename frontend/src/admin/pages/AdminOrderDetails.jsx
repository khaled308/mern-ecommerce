import { useParams } from "react-router-dom";
import { orders } from "../../../dump-data";
import AdminLayout from "../layouts/AdminLayout";

const AdminOrderDetails = () => {
  const { orderId } = useParams();
  const order = orders.find((order) => order.id === orderId);

  const markAsDelivered = () => {
    // Logic to mark the order as delivered
  };

  const cancelOrder = () => {
    // Logic to cancel the order
  };

  if (!order) {
    return (
      <AdminLayout>
        <div className="py-10">Order not found.</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-full overflow-x-auto py-10">
        <table className="w-full table-fixed border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="w-1/3 px-4 py-2 font-semibold">Order ID:</td>
              <td className="w-2/3 px-4 py-2">{order.id}</td>
            </tr>
            <tr className="border-b">
              <td className="w-1/3 px-4 py-2 font-semibold">Date:</td>
              <td className="w-2/3 px-4 py-2">{order.date}</td>
            </tr>
            <tr className="border-b">
              <td className="w-1/3 px-4 py-2 font-semibold">Total:</td>
              <td className="w-2/3 px-4 py-2">{order.total}</td>
            </tr>
            <tr className="border-b">
              <td className="w-1/3 px-4 py-2 font-semibold">Paid:</td>
              <td className="w-2/3 px-4 py-2">{order.paid ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="w-1/3 px-4 py-2 font-semibold">Delivered:</td>
              <td className="w-2/3 px-4 py-2">
                {order.delivered ? "Yes" : "No"}
              </td>
            </tr>
            {/* Render additional order details */}
          </tbody>
        </table>
        <div className="mt-8 flex justify-end">
          {!order.delivered && (
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={markAsDelivered}
            >
              Mark as Delivered
            </button>
          )}
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={cancelOrder}
          >
            Cancel Order
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrderDetails;
