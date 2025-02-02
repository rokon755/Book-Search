import React from 'react'
import { useState } from 'react'

const MyUseStateHooks = () => {
  const [brand, setBrand] = useState({
    name: "BMW",
    model: 2025,
    color: "Red"
  })

  const changeColor = () => {
    setBrand((priv) => {
      return {
        ...priv, color: "Blue"
      }
    })
  }

  const changeModel = () => {
    setBrand((priv) => {
      return {
        ...priv, model: "2026"
      }
    })
  }

  const changeName = () => {
    setBrand((priv) => {
      return {
        ...priv, name: "Ferrari"
      }
    })
  }

  return (
    <div className='text-center mb-4'>
      <h1 className='text-2xl mb-4 mt-4'>I have a new {brand.name} car and it is model {brand.model} also this car is {brand.color}</h1>
      <button onClick={changeColor} className='bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2'>Change Color</button>
      <button onClick={changeModel} className='bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2'>Change Model</button>
      <button onClick={changeName} className='bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md'>Change Name</button>
    </div>
  )
}

export default MyUseStateHooks