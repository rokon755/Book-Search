import { useState } from 'react'
import './Registration.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is not valid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    else if (!/^\d{11}$/.test(formData.phone))
      newErrors.phone = "Phone Number must be 11 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

      console.log("Form Submitted", formData);

      setSuccessMessage("Registration Successful!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });
      setErrors({});
    }
  };

  return (
    <div className='w-2xl m-auto mt-5 mb-5 bg-gray-100 p-5 rounded-md shadow'>
      <h2 className='text-2xl font-bold mb-5'>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='w-full block mt-3'>Full Name</label>
          <input
            type="text"
            name="fullName"
            className='w-full block border outline-0 border-gray-300 bg-white p-2 rounded-md'
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.fullName}</p>
        </div>

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

        <div>
          <label className='w-full block mt-3'>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className='w-full block border outline-0 border-gray-300 bg-white p-2 rounded-md'
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        </div>

        <div>
          <label className='w-full block mt-3'>Phone Number</label>
          <input
            type="text"
            name="phone"
            className='w-full block border outline-0 border-gray-300 bg-white p-2 rounded-md'
            placeholder="01712 312723"
            value={formData.phone}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.phone}</p>
        </div>

        <button type="submit" className='bg-blue-600 cursor-pointer text-white p-3 pl-6 pr-6 mt-3 rounded-md'>Register</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default RegistrationForm;