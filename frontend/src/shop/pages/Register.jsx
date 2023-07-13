import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import ShopLayout from "../layouts/ShopLayout";
import Label from "../../shared/components/form/Label";
import Input from "../../shared/components/form/Input";

const Register = () => {
  const INITIAL_DATA = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Values:", values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <ShopLayout>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md">
          <Formik
            initialValues={INITIAL_DATA}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, handleSubmit }) => (
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <div className="mb-4">
                  <Label htmlFor="name" text="Name" />
                  <Field
                    as={Input}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email" text="Email" />
                  <Field
                    as={Input}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="password" text="Password" />
                  <Field
                    as={Input}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="confirmPassword" text="Confirm Password" />
                  <Field
                    as={Input}
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                  <div className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Register;
