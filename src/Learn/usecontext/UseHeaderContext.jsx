import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const UseHeaderContext = () => {

  const { phone, name } = useContext(AppContext)

  return (
    <div className='text-center'>
      <h1>Phone: {phone}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default UseHeaderContext;