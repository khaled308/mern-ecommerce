import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AdminLayout from "../layouts/AdminLayout";
import { users } from "../../../dump-data";

const UserEdit = () => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === userId);

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <AdminLayout>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Edit User</h1>
        <Formik
          initialValues={{
            name: user.name,
            email: user.email,
            role: user.role,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2"
                readOnly
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="block font-medium mb-1">
                Role
              </label>
              <Field
                as="select"
                id="role"
                name="role"
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </AdminLayout>
  );
};

export default UserEdit;
