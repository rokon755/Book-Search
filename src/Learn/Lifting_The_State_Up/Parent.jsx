import { useState } from "react"
import Child from "./Child"

const Parent = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <hr />
      <h1 className="text-center text-2xl pt-10">The count is Parent: {count}</h1>
      <Child count={count} onSetCount={incrementCount} decrementCount={decrementCount} resetCount={resetCount} />
    </div>
  )
}

export default Parent