import { useParams } from "react-router-dom";
import { orders } from "../../../../dump-data";
import ShopLayout from "../../layouts/ShopLayout";

const UserOrderDetails = () => {
  const { orderId } = useParams();
  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return (
      <ShopLayout>
        <div className="py-10">Order not found.</div>
      </ShopLayout>
    );
  }

  return (
    <ShopLayout>
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
      </div>
    </ShopLayout>
  );
};

export default UserOrderDetails;
