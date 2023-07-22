/* eslint-disable react/no-unescaped-entities */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import ShopLayout from "../layouts/ShopLayout";
import Label from "../../shared/components/form/Label";
import Input from "../../shared/components/form/Input";
import { login, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../shared/components/Loader";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const dispatch = useDispatch();
  const { isSuccess, isError } = useSelector((state) => state.auth);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isLoading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  const INITIAL_DATA = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Values:", values);
    dispatch(reset());
    dispatch(login(values));
    setSubmitting(false);
    setIsSubmitting(true);
    resetForm();
  };

  useEffect(() => {
    if (!isLoading) {
      setAuthChecked(true);
    }
  }, [isLoading]);

  if (!authChecked) {
    return <Loader />;
  }

  if (isSuccess) {
    return <Navigate to="/" />;
  }

  if (isError && isSubmitting) {
    toast.error("Invalid Credentials");
    setIsSubmitting(false);
  }

  return isError ? (
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
                <h1 className="text-2xl font-bold mb-4">Login</h1>
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

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                  <div className="text-sm">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-500 hover:underline"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </ShopLayout>
  ) : (
    <Loader />
  );
};

export default Login;
