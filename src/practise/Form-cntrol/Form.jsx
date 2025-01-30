import { useState } from "react"

const Form = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")


  const inputName = (e) => {
    setName(e.target.value);
  }

  const inputEmail = (e) => {
    setEmail(e.target.value);
  }

  const inputPass = (e) => {
    setPass(e.target.value);
  }

  const finalValue = (e) => {
    e.preventDefault()
    console.log(`Name is: ${Name}`)
    console.log(`Email is: ${Email}`)
    console.log(`Password is: ${Pass}`)
  }

  return (
    <>
      <form action="" onSubmit={finalValue} className="border-1 border-gray-300 rounded-md mt-5 p-5.5 mb-5 max-w-150 m-auto">
        <div>
          <label className="block text-left">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={inputName}
            required
            className="border-1 rounded-md p-1.5 border-gray-300 w-[100%] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-left mt-5">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={inputEmail}
            required
            className="border-1 rounded-md p-1.5 border-gray-300 w-[100%] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-left mt-5">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={Pass}
            onChange={inputPass}
            required
            className="border-1 rounded-md p-1.5 border-gray-300 w-[100%] focus:outline-none"
          />
        </div>
        <button type="submit" className="mt-5 bg-blue-500 text-white pl-6 pr-6 pt-2 pb-2 rounded-md">Submit</button>
      </form>
    </>
  )
}

export default Form