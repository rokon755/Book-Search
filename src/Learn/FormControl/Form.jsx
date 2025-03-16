import { useState } from "react"

const Form = () => {

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");


  const inputName = (e) => {
    setName(e.target.value);
  }

  const inputEmail = (e) => {
    setEmail(e.target.value);
  }

  const inputPass = (e) => {
    setPass(e.target.value);
  }

  // Validation
  const validateForm = () => {
    let myErrors = {};

    if (!Name) myErrors.Name = "Name is required";
    if (!Email.includes("@")) myErrors.Email = "Email is required";
    if (Pass.length < 6) myErrors.Pass = "Password must be 6 characters";

    setErrors(myErrors);

    return Object.keys(myErrors).length === 0; // return true, if no errors
  };

  const finalValue = (e) => {
    e.preventDefault()

    console.log(`Name is: ${Name}`)
    console.log(`Email is: ${Email}`)
    console.log(`Password is: ${Pass}`)

    if (validateForm()) {
      setSuccessMessage("Form Submission Successfully!");
      setName("");
      setEmail("");
      setPass("");
    }

  }


  const bgButton = ['mt-5 bg-blue-500 text-white pl-6 pr-6 pt-3 pb-3 rounded-md block w-[100%] cursor-pointer']


  return (
    <>
      <h1 className="text-2xl mb-4 mt-4 text-center">Form with custom Validation</h1>
      <form action="" onSubmit={finalValue} className="border-1 border-gray-300 rounded-md mt-5 p-5.5 mb-5 max-w-150 m-auto">
        <div>
          <label className="block text-left">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={inputName}
            className="border-1 rounded-md p-1.5 border-gray-300 w-[100%] focus:outline-none"
          />
          {errors.Name && <p style={{ color: "red" }}>{errors.Name}</p>}
        </div>
        <div>
          <label className="block text-left mt-5">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={inputEmail}
            className="border-1 rounded-md p-1.5 border-gray-300 w-[100%] focus:outline-none"
          />
          {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
        </div>
        <div>
          <label className="block text-left mt-5">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={Pass}
            onChange={inputPass}
            className="border-1 rounded-md p-1.5 border-gray-300 w-[100%] focus:outline-none"
          />
          {errors.Pass && <p style={{ color: "red" }}>{errors.Pass}</p>}
        </div>
        <button type="submit" className={bgButton}>Submit</button>
        {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
      </form>
    </>
  )
}

export default Form