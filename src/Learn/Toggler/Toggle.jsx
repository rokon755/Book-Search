import { useState } from "react"

const Toggle = () => {

  const [toggle, setToggle] = useState(false)

  const btnFunction = () => {
    setToggle(!toggle)
  }

  const btnStyle = ['bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md'];

  return (
    <div className="text-center p-8">
      <button onClick={btnFunction} className={btnStyle}>
        {toggle ? "Hide" : "Show"}
      </button>

      {
        toggle &&
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      }

    </div>
  )
}

export default Toggle