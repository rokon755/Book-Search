import { useState } from "react"

const Button = ({ count, onSetCount, decrementCount, resetCount }) => {

  const [buttonCount, setButtonCount] = useState(count)


  const lastCountIncre = () => {
    setButtonCount(buttonCount + count)
  }

  const lastCountDec = () => {
    setButtonCount(buttonCount - count)
  }

  const lastCountReset = () => {
    setButtonCount(0)
  }

  return (
    <div className="text-center">
      <h1 className="text-center text-2xl pt-[15px] mb-5.5">Count depend on Parent and Child values : {buttonCount}</h1>
      <button className="bg-blue-500 text-white p-3 mr-1.5 rounded-md" onClick={resetCount}>Reset 0</button>
      <button className="bg-blue-500 text-white p-3 mr-1.5 rounded-md" onClick={decrementCount}>Decrement -</button>
      <button className="bg-blue-500 text-white p-3 mr-1.5 rounded-md" onClick={onSetCount}>Increment +</button>
      <br />
      <br />

      <button className="bg-fuchsia-600 text-white p-3 mr-1.5 rounded-md" onClick={lastCountReset}>Reset 0</button>
      <button className="bg-fuchsia-600 text-white p-3 mr-1.5 rounded-md" onClick={lastCountDec}>Button Decrement -</button>
      <button className="bg-fuchsia-600 text-white p-3 mr-1.5 rounded-md" onClick={lastCountIncre}>Button Increment +</button>
    </div>
  )
}

export default Button