import React, { useMemo, useState } from 'react'

const UseMemoHooks = () => {

  const [number, setNumber] = useState(0)
  const [value, setValue] = useState(0)

  const cubeNumber = (num) => {
    console.log("Calculation Done!");
    return Math.pow(num, 3);
  }

  const setterNumber = (e) => {
    setNumber(e.target.value)
  }

  const increaseValue = () => {
    setValue(value + 1)
  }

  const result = useMemo(() => {
    return cubeNumber(number)
  }, [number])

  return (
    <div className='text-center p-10'>
      <input type='number' value={number} onChange={setterNumber} className='border-1 border-gray-200 p-1.5 mt-3 rounded-md' />
      <h1 className='text-2xl mb-3'>Cube Number is: {result}</h1>
      <h1>Increase Value: {value}</h1>
      <button className='bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md' onClick={increaseValue}>++</button>
    </div>
  )
}

export default UseMemoHooks