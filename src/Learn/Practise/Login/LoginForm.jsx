import { useState } from "react";

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is not valid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

      console.log("Login Successful", formData);

      setSuccessMessage("Login Successful!");
      setFormData({ email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div className='w-2xl m-auto mt-8 mb-8 bg-blue-50 p-5 rounded-md shadow'>
      <h2 className='text-2xl font-bold mb-5'>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label className='w-full block mt-3'>Email</label>
          <input
            type="email"
            name="email"
            className='w-full block border outline-0 border-gray-300 bg-white p-2 rounded-md'
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        <div>
          <label className='w-full block mt-3'>Password</label>
          <input
            type="password"
            name="password"
            className='w-full block border outline-0 border-gray-300 bg-white p-2 rounded-md'
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit" className='bg-blue-600 cursor-pointer text-white p-3 pl-6 pr-6 mt-3 mb-3 rounded-md'>Login</button>
      </form>
      {successMessage && <p style={{ color: "green", fontWeight: "bold" }}>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
