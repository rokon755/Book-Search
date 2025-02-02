import React, { useEffect, useRef, useState } from 'react'

const MyUseRef = () => {

  const [value, setValue] = useState(0)
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const countIncrease = () => {
    setValue(value + 1)
  }

  const countDecrease = () => {
    setValue(value - 1)
  }

  return (
    <div>
      <button onClick={countDecrease}>-</button>
      <h2>Count: {value}</h2>
      <button onClick={countIncrease}>+</button>

      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default MyUseRef