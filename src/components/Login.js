import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router"; // Make sure to use 'react-router-dom'

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate(); // Properly initialize useNavigate

  function handleNavigate(values) {
    alert("Login Successful!"); // Display a success message
    navigate("/"); // Navigate to the home page or the desired route
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        handleNavigate(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="relative bg-orange-300 rounded-lg max-w-md w-full p-8 text-center shadow-lg">
            <form noValidate onSubmit={handleSubmit}>
              <span className="text-4xl text-blue-600 mb-6 block font-bold">
                Login
              </span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                className="w-full p-3 mb-4 bg-gray-200 rounded-md focus:outline-none text-sm"
              />
              <p className="text-red-500 text-xs mb-2 text-left">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
                className="w-full p-3 mb-4 bg-gray-200 rounded-md focus:outline-none text-sm"
              />
              <p className="text-red-500 text-xs mb-2 text-left">
                {errors.password && touched.password && errors.password}
              </p>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors uppercase font-semibold"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
