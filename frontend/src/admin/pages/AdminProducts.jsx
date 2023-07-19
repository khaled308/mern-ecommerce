import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { products } from "../../../dump-data";
import { useState } from "react";
import Alert from "../../shared/components/Alert";

const AdminProducts = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDelete = (productId) => {
    setShowAlert(true);
    setSelectedProductId(productId);
    console.log(`Deleting product with id ${productId}`);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting user with ID: ${selectedProductId}`);
    setShowAlert(false);
  };

  return (
    <AdminLayout>
      {showAlert && (
        <Alert
          type="warning"
          message="Are you sure you want to delete this user?"
          onClose={() => setShowAlert(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
      <div className="max-w-full overflow-x-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <Link
            to="/admin/products/create"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Create Product
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.description.substring(0, 50)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.rating}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
