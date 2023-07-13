import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ShopLayout from "../../layouts/ShopLayout";
import Label from "../../../shared/components/form/Label";
import Input from "../../../shared/components/form/Input";

const UserProfile = () => {
  const INITIAL_DATA = {
    name: "khaled",
    password: "123456",
    phone: "",
    country: "",
    zipCode: "",
    state: "",
    city: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number is not valid"),
    country: Yup.string(),
    zipCode: Yup.string(),
    state: Yup.string(),
    city: Yup.string(),
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
                  <Input name="email" value="user@gmail.com" disabled />
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
                  <Label htmlFor="phone" text="Phone" />
                  <Field
                    as={Input}
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="country" text="Country" />
                  <Field
                    as={Input}
                    id="country"
                    type="text"
                    name="country"
                    placeholder="Enter your Country"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="zipCode" text="Zip Code" />
                  <Field
                    as={Input}
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    placeholder="Enter your Zip Code"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="state" text="State" />
                  <Field
                    as={Input}
                    id="state"
                    type="text"
                    name="state"
                    placeholder="Enter your State"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="city" text="City" />
                  <Field
                    as={Input}
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Enter your City"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </ShopLayout>
  );
};

export default UserProfile;
