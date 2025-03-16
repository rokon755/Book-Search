import React, { useEffect, useState } from 'react'

const JsonPlaceholderData = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")


  const API = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setError(error)
        setLoading(false)

      });
  }, [])


  if (loading) {
    return (
      <div className='text-center text-2xl font-bold'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center text-2xl font-bold'>
        <h1>Error: {error.message}</h1>
      </div>
    )
  }

  console.log(data);

  return (
    <section className='text-center mt-8 mb-8'>
      <header>
        <h1 className='text-4xl mb-5 font-bold'>Lets catch JsonPlaceholder API Data</h1>
      </header>
      <ul className='max-w-7xl flex gap-y-4 justify-between block m-auto flex-wrap'>
        {
          data.slice(0, 8).map((currentData) => {
            return (
              <li key={currentData.id} className='bg-blue-100 shadow p-8 w-[24%] rounded-md'>
                <h3 className='text-2xl font-bold'>{currentData.title.slice(0, 10)}..</h3>
                <p>{currentData.body.slice(0, 80)}</p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default JsonPlaceholderData