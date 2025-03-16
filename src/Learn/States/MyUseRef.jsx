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
    <div className='p-8 text-center'>
      <h1 className='text-2xl mb-4'>UseRef Hook</h1>
      <button className='bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2' onClick={countDecrease}>Decrease -</button>
      <button className='bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2' onClick={countIncrease}>Increase +</button>
      <h2>Count: {value}</h2>

      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default MyUseRef