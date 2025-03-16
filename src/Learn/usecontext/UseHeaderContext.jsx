import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const UseHeaderContext = () => {

  const { phone, name } = useContext(AppContext)

  return (
    <div className='text-center p-8'>
      <h1 className='text-2xl mb-4'>useContext Data</h1>
      <h1>Phone: {phone}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default UseHeaderContext;