import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/user";
import Alert from "../../shared/components/Alert";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDelete = (userId) => {
    setShowAlert(true);
    setSelectedUserId(userId);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting user with ID: ${selectedUserId}`);
    setShowAlert(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);
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
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <Link
            to="/admin/users/create"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Create User
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/admin/users/edit/${user.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-500 hover:underline ml-4"
                    onClick={() => handleDelete(user._id)}
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

export default Users;
